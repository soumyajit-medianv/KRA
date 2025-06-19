import { Employee } from 'src/employee-info/entities/employee.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

export enum LeaveType {
    SICK = 'sick',
    CASUAL = 'casual',
    EARNED = 'earned',
    UNPAID = 'unpaid',
}

export enum LeaveStatus {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected',
    CANCELLED = 'cancelled',
}

@Entity()
export class Leave {
    @PrimaryGeneratedColumn()
    leave_id: number;

    @ManyToOne(() => Employee, (employee) => employee.leaveRequests)
    @JoinColumn({ name: 'employee_id' })
    employee: Employee;

    @Column({ type: 'enum', enum: LeaveType })
    type: LeaveType;

    @Column({ type: 'date' })
    start_date: Date;

    @Column({ type: 'date' })
    end_date: Date;

    @Column({ type: 'int' })
    total_days: number;

    @Column({ type: 'enum', enum: LeaveStatus, default: LeaveStatus.PENDING })
    status: LeaveStatus;

    @Column({ type: 'text', nullable: true })
    reason: string;

    @CreateDateColumn()
    applied_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}


