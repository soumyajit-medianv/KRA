import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Leave, LeaveStatus } from './entities/leave.entity';
import { Employee } from 'src/employee-info/entities/employee.entity';
import { LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { CreateLeaveDto } from './dto/create_leave.dto';
import { LeaveBalance } from './entities/leave_balance.entity';
import { UpdateLeaveBalanceDto } from './dto/update_leave_balance.dto';

@Injectable()
export class LeaveService {
    constructor(
        @InjectRepository(Leave)
        private leaveRepo: Repository<Leave>,

        @InjectRepository(Employee)
        private employeeRepo: Repository<Employee>,

        @InjectRepository(LeaveBalance)
        private balanceRepo: Repository<LeaveBalance>,

    ) { }


    async applyForLeave(dto: CreateLeaveDto): Promise<Leave> {
        const employee = await this.employeeRepo.findOne({
            where: { employee_id: dto.employee_id },
        });

        if (!employee) {
            throw new NotFoundException('Employee not found');
        }

        // Validate date range
        if (dto.end_date < dto.start_date) {
            throw new BadRequestException('End date cannot be before start date');
        }
        
        // Check overlapping leaves
        const overlap = await this.leaveRepo.findOne({
            where: {
                employee: { employee_id: dto.employee_id },
                start_date: LessThanOrEqual(dto.end_date),
                end_date: MoreThanOrEqual(dto.start_date),
            },
        });

        if (overlap) {
            throw new BadRequestException('Leave overlaps with an existing request');
        }

        // Auto calculate total_days if not passed
        const totalDays = Math.ceil(
            (new Date(dto.end_date).getTime() - new Date(dto.start_date).getTime()) /
            (1000 * 60 * 60 * 24) + 1,
        );

        const leave = this.leaveRepo.create({
            ...dto,
            total_days: dto.total_days || totalDays,
            employee,
        });

        return this.leaveRepo.save(leave);
    }

    async getAllLeaves(): Promise<Leave[]> {
        return this.leaveRepo.find({
            relations: ['employee'],
            order: { applied_at: 'DESC' },
        });
    }

    async getLeavesByEmployee(employeeId: number): Promise<Leave[]> {
        return this.leaveRepo.find({
            where: { employee: { employee_id: employeeId } },
            order: { applied_at: 'DESC' },
        });
    }

    async updateLeaveStatus(id: number, status: LeaveStatus): Promise<Leave> {
        const leave = await this.leaveRepo.findOne({
            where: { leave_id: id },
        });

        if (!leave) {
            throw new NotFoundException('Leave not found');
        }

        leave.status = status;
        return this.leaveRepo.save(leave);
    }

    async deleteLeave(id: number): Promise<{ message: string }> {
        const leave = await this.leaveRepo.findOneBy({ leave_id: id });
        if (!leave) throw new NotFoundException('Leave not found');

        await this.leaveRepo.remove(leave);
        return { message: 'Leave request deleted successfully' };
    }

    // LeaveBalance
    async getBalanceByEmployee(employeeId: number): Promise<LeaveBalance> {
        const balance = await this.balanceRepo.findOne({
            where: { employee: { employee_id: employeeId } },
            relations: ['employee'],
        });

        if (!balance) {
            throw new NotFoundException('Leave balance not found');
        }

        return balance;
    }

    async updateBalance(employeeId: number, dto: UpdateLeaveBalanceDto): Promise<LeaveBalance> {
        const balance = await this.balanceRepo.findOne({
            where: { employee: { employee_id: employeeId } },
            relations: ['employee'],
        });

        if (!balance) {
            throw new NotFoundException('Leave balance not found');
        }

        Object.assign(balance, dto);

        return this.balanceRepo.save(balance);
    }

    async createInitialBalance(employeeId: number): Promise<LeaveBalance> {
        const employee = await this.employeeRepo.findOne({
            where: { employee_id: employeeId }
        });

        if (!employee) {
            throw new NotFoundException('Employee not found');
        }

        const balance = this.balanceRepo.create({ employee });
        return this.balanceRepo.save(balance);
    }

}


