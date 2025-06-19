import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Attendance } from './entities/attendance.entity';
import { Repository } from 'typeorm';
import { Employee } from 'src/employee-info/entities/employee.entity';
import { CreateAttendanceDto } from './dto/create_attendance.dto';
import { UpdateAttendanceDto } from './dto/update_attendance.dto';

@Injectable()
export class AttendanceService {
    constructor(
        @InjectRepository(Attendance)
        private attendanceRepo: Repository<Attendance>,

        @InjectRepository(Employee)
        private employeeRepo: Repository<Employee>,
    ) { }

    async createAttendance(dto: CreateAttendanceDto): Promise<Attendance> {
        const employee = await this.employeeRepo.findOne({
            where: { employee_id: dto.employee_id },
        });
        if (!employee) throw new NotFoundException('Employee not found');

        // Prevent duplicate attendance on same date
        const existingAttendance = await this.attendanceRepo.findOne({
            where: {
                employee: { employee_id: dto.employee_id },
                date: dto.date,
            },
        });

        if (existingAttendance) {
            throw new ConflictException('Attendance already exists for this employee on this date');
        }

        const attendance = this.attendanceRepo.create({
            ...dto,
            employee,
            clock_in: dto.clock_in || new Date(),
        });

        return await this.attendanceRepo.save(attendance);
    }

    async punchOut(attendanceId: number): Promise<Attendance> {
        const attendance = await this.attendanceRepo.findOne({
            where: { attendance_id: attendanceId },
        });
        if (!attendance) throw new NotFoundException('Attendance not found');

        const now = new Date();
        attendance.clock_out = now;

        // Calculate total worked minutes (if clock_in exists)
        if (attendance.clock_in) {
            const diffMs = now.getTime() - attendance.clock_in.getTime();
            attendance.total_worked_minutes = Math.floor(diffMs / 60000);

            // calculate overtime if worked minutes > 480 (8 hrs)
            if (attendance.total_worked_minutes > 480) {
                attendance.overtime_minutes = attendance.total_worked_minutes - 480;
            } else {
                attendance.overtime_minutes = 0;
            }
        }

        return await this.attendanceRepo.save(attendance);
    }

    async getAllAttendances(): Promise<Attendance[]> {
        return await this.attendanceRepo.find({ relations: ['employee'] });
    }

    async getAttendanceByEmployee(employeeId: number): Promise<Attendance[]> {
        return await this.attendanceRepo.find({
            where: { employee: { employee_id: employeeId } },
            relations: ['employee'],
            order: { date: 'DESC' },
        });
    }

    async getAttendanceByEmployeeAndDate(employeeId: number, date: string) {
        return this.attendanceRepo.findOne({
            where: {
                employee: { employee_id: employeeId },
                date: new Date(date),
            },
            relations: ['employee'],
        });
    }

    async updateAttendance(id: number, dto: UpdateAttendanceDto) {
        const attendance = await this.attendanceRepo.findOne({
            where: { attendance_id: id },
        });

        if (!attendance) {
            throw new NotFoundException('Attendance record not found');
        }

        Object.assign(attendance, dto);
        return this.attendanceRepo.save(attendance);
    }

    async deleteAttendance(id: number) {
        const result = await this.attendanceRepo.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException('Attendance record not found');
        }
        return { message: 'Attendance record deleted successfully' };
    }

}


