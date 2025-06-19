import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entities/user.entity';
import { EmployeeInfoModule } from './employee-info/employee-info.module';
import { Employee } from './employee-info/entities/employee.entity';
import { Department } from './employee-info/entities/department.entity';
import { EmployeeDocuments } from './employee-info/entities/documents.entity';
import { EmergencyContact } from './employee-info/entities/emergency_contact.entity';
import { AttendanceModule } from './attendance/attendance.module';
import { Attendance } from './attendance/entities/attendance.entity';
import { LeaveModule } from './leave/leave.module';
import { Leave } from './leave/entities/leave.entity';
import { LeaveBalance } from './leave/entities/leave_balance.entity';
import { PayrollModule } from './payroll/payroll.module';
import { SalaryGrade } from './payroll/entities/salary_grade.entity';
import { Payroll } from './payroll/entities/payroll.entity';
import { PerformanceModule } from './performance/performance.module';
import { Goal } from './performance/entities/goal.entity';
import { AppraisalCycle } from './performance/entities/appraisal_cycle.entity';
import { PerformanceReview } from './performance/entities/performance_review.entity';
import { Feedback } from './performance/entities/feedback.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        isGlobal: true
      })],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USERNAME'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        synchronize: configService.get<boolean>('POSTGRES_SYNC'),
        entities: [User, Employee, Department, EmployeeDocuments, EmergencyContact, Attendance, Leave, LeaveBalance, SalaryGrade, Payroll, Goal, AppraisalCycle, PerformanceReview, Feedback],
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    EmployeeInfoModule,
    AttendanceModule,
    LeaveModule,
    PayrollModule,
    PerformanceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }


