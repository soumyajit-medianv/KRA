import { Employee } from "src/employee-info/entities/employee.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppraisalCycle } from "./appraisal_cycle.entity";

@Entity()
export class PerformanceReview {
    @PrimaryGeneratedColumn()
    review_id: number;

    @ManyToOne(() => Employee)
    reviewer: Employee;

    @ManyToOne(() => Employee)
    reviewee: Employee;

    @ManyToOne(() => AppraisalCycle)//
    cycle: AppraisalCycle;

    @Column('int')
    rating: number;

    @Column()
    feedback: string;
}






