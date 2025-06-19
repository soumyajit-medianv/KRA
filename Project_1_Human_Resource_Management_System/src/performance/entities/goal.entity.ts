import { Employee } from "src/employee-info/entities/employee.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Goal {
    @PrimaryGeneratedColumn()
    goal_id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ default: false })
    is_completed: boolean;

    @ManyToOne(() => Employee, employee => employee.goals)
    employee: Employee;
}