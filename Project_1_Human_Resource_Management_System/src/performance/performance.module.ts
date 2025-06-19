import { Module } from '@nestjs/common';
import { PerformanceService } from './performance.service';
import { PerformanceController } from './performance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/employee-info/entities/employee.entity';
import { AuthModule } from 'src/auth/auth.module';
import { EmployeeInfoModule } from 'src/employee-info/employee-info.module';
import { Goal } from './entities/goal.entity';
import { AppraisalCycle } from './entities/appraisal_cycle.entity';
import { PerformanceReview } from './entities/performance_review.entity';
import { Feedback } from './entities/feedback.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee, Goal, AppraisalCycle, PerformanceReview, Feedback]),
    AuthModule, EmployeeInfoModule
  ],
  providers: [PerformanceService],
  controllers: [PerformanceController],
  exports: [PerformanceService]
})
export class PerformanceModule { }


