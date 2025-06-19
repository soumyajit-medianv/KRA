import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { PerformanceService } from './performance.service';
import { CreateGoalDto } from './dto/create_goal.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt_auth.guard';
import { RoleGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { User, UserRole } from 'src/auth/entities/user.entity';
import { CreateAppraisalCycleDto } from './dto/create_appraisal_cycle.dto';
import { CreatePerformanceReviewDto } from './dto/create_performance_review.dto';
import { CreateFeedbackDto } from './dto/create_feedback.dto';

@Controller('performance')
@UseGuards(JwtAuthGuard, RoleGuard)
export class PerformanceController {
    constructor(private readonly performanceService: PerformanceService) { }

    @Roles(UserRole.ADMIN, UserRole.HR)
    @Post('goal/:employeeId')
    createGoal(@Body() dto: CreateGoalDto, @Param('employeeId', ParseIntPipe) employeeId: number) {
        return this.performanceService.createGoal(employeeId, dto);
    }

    @Roles(UserRole.ADMIN, UserRole.HR)
    @Post('appraisal')
    createCycle(@Body() dto: CreateAppraisalCycleDto) {
        return this.performanceService.createAppraisalCycle(dto);
    }

    @Roles(UserRole.ADMIN, UserRole.HR, UserRole.USER)
    @Post('review')
    createReview(@Body() dto: CreatePerformanceReviewDto) {
        return this.performanceService.createReview(dto);
    }

    @Roles(UserRole.ADMIN, UserRole.HR, UserRole.USER)
    @Post('feedback')
    giveFeedback(@Body() dto: CreateFeedbackDto) {
        return this.performanceService.giveFeedback(dto);
    }

    @Roles(UserRole.ADMIN, UserRole.HR, UserRole.USER)
    @Get('goals/:employeeId')
    getGoalsByEmployee(@Param('employeeId', ParseIntPipe) employeeId: number) {
        return this.performanceService.getGoalsByEmployee(employeeId);
    }

    @Roles(UserRole.ADMIN, UserRole.HR, UserRole.USER)
    @Get('history/:employeeId')
    getHistoryByEmployee(@Param('employeeId', ParseIntPipe) employeeId: number) {
        return this.performanceService.getHistoryByEmployee(employeeId);
    }

    @Roles(UserRole.ADMIN, UserRole.HR, UserRole.USER)
    @Get('summary/:employeeId')
    getPerformanceSummary(@Param('employeeId', ParseIntPipe) employeeId: number) {
        return this.performanceService.getPerformanceSummary(employeeId);
    }

    @Roles(UserRole.ADMIN)
    @Patch('cycle/:cycleId/close')
    closeReviewCycle(@Param('cycleId', ParseIntPipe) cycleId: number) {
        return this.performanceService.closeReviewCycle(cycleId);
    }

}


