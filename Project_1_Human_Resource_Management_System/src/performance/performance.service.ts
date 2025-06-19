import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Goal } from './entities/goal.entity';
import { Repository } from 'typeorm';
import { AppraisalCycle } from './entities/appraisal_cycle.entity';
import { PerformanceReview } from './entities/performance_review.entity';
import { Feedback } from './entities/feedback.entity';
import { Employee } from 'src/employee-info/entities/employee.entity';
import { CreateGoalDto } from './dto/create_goal.dto';
import { CreateAppraisalCycleDto } from './dto/create_appraisal_cycle.dto';
import { CreatePerformanceReviewDto } from './dto/create_performance_review.dto';
import { CreateFeedbackDto } from './dto/create_feedback.dto';

@Injectable()
export class PerformanceService {
    constructor(
        @InjectRepository(Goal)
        private goalRepo: Repository<Goal>,

        @InjectRepository(AppraisalCycle)
        private cycleRepo: Repository<AppraisalCycle>,

        @InjectRepository(PerformanceReview)
        private reviewRepo: Repository<PerformanceReview>,

        @InjectRepository(Feedback)
        private feedbackRepo: Repository<Feedback>,

        @InjectRepository(Employee)
        private empRepo: Repository<Employee>
    ) { }


    async createGoal(employeeId: number, dto: CreateGoalDto) {
        const employee = await this.empRepo.findOne({
            where: { employee_id: employeeId }
        });

        if (!employee) {
            throw new NotFoundException('Employee not found');
        }

        const goal = this.goalRepo.create({
            ...dto, employee
        });
        return this.goalRepo.save(goal);
    }

    createAppraisalCycle(dto: CreateAppraisalCycleDto) {
        const cycle = this.cycleRepo.create(dto);
        return this.cycleRepo.save(cycle);
    }

    async createReview(dto: CreatePerformanceReviewDto) {
        const reviewer = await this.empRepo.findOne({
            where: { employee_id: dto.reviewer_id }
        });

        const reviewee = await this.empRepo.findOne({
            where: { employee_id: dto.reviewee_id }
        });

        const cycle = await this.cycleRepo.findOne({
            where: { cycle_id: dto.cycle_id }
        });

        if (!reviewer || !reviewee || !cycle) {
            throw new NotFoundException('Invalid data');
        }

        const review = this.reviewRepo.create({
            reviewer,
            reviewee,
            cycle,
            rating: dto.rating,
            feedback: dto.feedback,
        })

        return this.reviewRepo.save(review);
    }

    async giveFeedback(dto: CreateFeedbackDto) {
        const from = await this.empRepo.findOne({
            where: { employee_id: dto.from_id }
        });

        const to = await this.empRepo.findOne({
            where: { employee_id: dto.to_id }
        })

        const cycle = await this.cycleRepo.findOne({
            where: { cycle_id: dto.cycle_id }
        });

        if (!from || !to || !cycle) {
            throw new NotFoundException('Invalid data');
        }

        const feedback = this.feedbackRepo.create({
            from,
            to,
            cycle,
            comments: dto.comments
        })

        return this.feedbackRepo.save(feedback);
    }

    async getGoalsByEmployee(employeeId: number) {
        const goals = this.goalRepo.find({
            where: { employee: { employee_id: employeeId } },
            relations: ['employee'],
        });

        return goals;
    }

    async getHistoryByEmployee(employeeId: number) {
        const reviewHistory = this.reviewRepo.find({
            where: { reviewee: { employee_id: employeeId } },
            relations: ['reviewer', 'reviewee', 'cycle']
        })

        return reviewHistory;
    }

    async getPerformanceSummary(employeeId: number) {
        const feedbacks = await this.feedbackRepo.find({
            where: { to: { employee_id: employeeId } },
        });

        let total = feedbacks.length;
        const avg = total ? feedbacks.reduce((acc, f) => acc + (f.rating || 0), 0) / total : 0;

        return {
            employee_id: employeeId,
            reviews_count: total,
            average_rating: avg.toFixed(2),
        };
    }

    async closeReviewCycle(cycleId: number) {
        const cycle = await this.cycleRepo.findOne({
            where: { cycle_id: cycleId }
        });

        if (!cycle) {
            throw new NotFoundException('Review cycle not found');
        }
        cycle.is_closed = true;
        return this.cycleRepo.save(cycle);
    }

}


