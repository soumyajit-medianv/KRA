import { Module } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { PayrollController } from './payroll.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/employee-info/entities/employee.entity';
import { AuthModule } from 'src/auth/auth.module';
import { EmployeeInfoModule } from 'src/employee-info/employee-info.module';
import { SalaryGrade } from './entities/salary_grade.entity';
import { Payroll } from './entities/payroll.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee, SalaryGrade, Payroll]),
    AuthModule, EmployeeInfoModule,
  ],
  providers: [PayrollService],
  controllers: [PayrollController],
  exports: [PayrollService]
})
export class PayrollModule { }
