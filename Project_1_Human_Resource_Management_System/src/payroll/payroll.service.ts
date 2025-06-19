import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalaryGrade } from './entities/salary_grade.entity';
import { Repository } from 'typeorm';
import { Payroll } from './entities/payroll.entity';
import { Employee } from 'src/employee-info/entities/employee.entity';
import { CreateSalaryGradeDto } from './dto/create_salary_grade.dto';
import { ProcessPayrollDto } from './dto/process_payroll.dto';

@Injectable()
export class PayrollService {
    constructor(
        @InjectRepository(SalaryGrade)
        private gradeRepo: Repository<SalaryGrade>,

        @InjectRepository(Payroll)
        private payrollRepo: Repository<Payroll>,

        @InjectRepository(Employee)
        private empRepo: Repository<Employee>
    ) { }


    createSalaryGrade(dto: CreateSalaryGradeDto) {
        const grade = this.gradeRepo.create(dto);
        return this.gradeRepo.save(grade);
    }

    async processPayroll(dto: ProcessPayrollDto) {
        const employee = await this.empRepo.findOne({
            where: { employee_id: dto.employee_id },
            relations: ['salary_grade'],
        });
        if (!employee) throw new NotFoundException('Employee not found');
        if (!employee.salary_grade) throw new NotFoundException('Salary grade not assigned to employee');

        const grade = employee.salary_grade;

        const gross = Number(grade.basic) + Number(grade.hra) + Number(grade.other_allowance);
        const deduction = Number(grade.pf) + Number(grade.esi) + Number(grade.tax);
        const net = gross - deduction;

        const payroll = this.payrollRepo.create({
            employee,
            basic: grade.basic,
            hra: grade.hra,
            other_allowance: grade.other_allowance,
            pf: grade.pf,
            esi: grade.esi,
            tax: grade.tax,
            gross_salary: gross,
            net_salary: net,
        });

        return this.payrollRepo.save(payroll);
    }

    findAllPayrolls() {
        return this.payrollRepo.find({ relations: ['employee'] });
    }

    findAllGrades() {
        return this.gradeRepo.find();
    }

    async getPayrollByEmployee(id: number) {
        const payroll = await this.payrollRepo.find({
            where: { employee: { employee_id: id } },
            relations: ['employee'],
            order: { processed_at: 'DESC' }
        });

        return payroll;
    }

    async deletePayroll(id: number) {
        const record = await this.payrollRepo.findOne({
            where: { payroll_id: id }
        });

        if (!record) {
            throw new NotFoundException('Payroll not found');
        }

        return this.payrollRepo.remove(record);
    }

}



