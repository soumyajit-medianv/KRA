import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt_auth.guard';
import { RoleGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRole } from 'src/auth/entities/user.entity';
import { CreateSalaryGradeDto } from './dto/create_salary_grade.dto';
import { ProcessPayrollDto } from './dto/process_payroll.dto';

@Controller('payroll')
@UseGuards(JwtAuthGuard, RoleGuard)
export class PayrollController {
    constructor(private readonly payrollService: PayrollService) { }

    @Roles(UserRole.ADMIN, UserRole.HR)
    @Post('grade')
    createSalaryGrade(@Body() dto: CreateSalaryGradeDto) {
        return this.payrollService.createSalaryGrade(dto);
    }

    @Roles(UserRole.ADMIN, UserRole.HR)
    @Post('process')
    processPayroll(@Body() dto: ProcessPayrollDto) {
        return this.payrollService.processPayroll(dto);
    }

    @Roles(UserRole.ADMIN, UserRole.HR)
    @Get()
    getAllPayrolls() {
        return this.payrollService.findAllPayrolls();
    }

    @Roles(UserRole.ADMIN, UserRole.HR)
    @Get('grade')
    findAllGrades() {
        return this.payrollService.findAllGrades();
    }

    @Roles(UserRole.ADMIN, UserRole.HR, UserRole.USER)
    @Get(':id')
    getPayrollByEmployee(@Param('id', ParseIntPipe) id: number) {
        return this.payrollService.getPayrollByEmployee(id);
    }

    @Roles(UserRole.ADMIN)
    @Delete(':id')
    deletePayroll(@Param('id', ParseIntPipe) id: number) {
        return this.payrollService.deletePayroll(id);
    }
        
}


