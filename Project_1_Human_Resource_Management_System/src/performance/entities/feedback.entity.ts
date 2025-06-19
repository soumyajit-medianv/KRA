import { Employee } from "src/employee-info/entities/employee.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppraisalCycle } from "./appraisal_cycle.entity";

@Entity()
export class Feedback {
    @PrimaryGeneratedColumn()
    feedback_id: number;

    @ManyToOne(() => Employee)//
    from: Employee;

    @ManyToOne(() => Employee)//
    to: Employee;

    @ManyToOne(() => AppraisalCycle) //
    cycle: AppraisalCycle;

    @Column()
    comments: string;

    @Column({ type: 'int', nullable: true })
    rating?: number;
}




