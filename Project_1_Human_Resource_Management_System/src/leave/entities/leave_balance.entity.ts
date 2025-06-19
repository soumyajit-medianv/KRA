import { Employee } from "src/employee-info/entities/employee.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class LeaveBalance {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Employee)
    @JoinColumn({ name: 'employee_id' })
    employee: Employee;

    @Column({ type: 'int', default: 12 })
    casual: number;

    @Column({ type: 'int', default: 10 })
    sick: number;

    @Column({ type: 'int', default: 0 })
    earned: number;

    @Column({ type: 'int', default: 0 })
    unpaid: number;
}




