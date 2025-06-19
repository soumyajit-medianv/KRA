import { Module } from '@nestjs/common';
import { LeaveController } from './leave.controller';
import { LeaveService } from './leave.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/employee-info/entities/employee.entity';
import { AuthModule } from 'src/auth/auth.module';
import { EmployeeInfoModule } from 'src/employee-info/employee-info.module';
import { Leave } from './entities/leave.entity';
import { LeaveBalance } from './entities/leave_balance.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee, Leave, LeaveBalance]),
    AuthModule, EmployeeInfoModule
  ],
  controllers: [LeaveController],
  providers: [LeaveService],
  exports: [LeaveService]
})
export class LeaveModule { }
