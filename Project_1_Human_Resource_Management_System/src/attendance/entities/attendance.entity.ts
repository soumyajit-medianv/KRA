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


@Entity()
export class Attendance {
    @PrimaryGeneratedColumn()
    attendance_id: number;

    @ManyToOne(() => Employee, (employee) => employee.attendanceRecords)
    @JoinColumn({ name: 'employee_id' })
    employee: Employee;

    @Column({ type: 'date' })
    date: Date;

    @Column({ type: 'timestamp', nullable: true })
    clock_in: Date;

    @Column({ type: 'timestamp', nullable: true })
    clock_out: Date;

    @Column({ type: 'int', nullable: true })
    total_worked_minutes: number;

    @Column({ type: 'int', nullable: true })
    overtime_minutes: number;

    @Column({ type: 'varchar', length: 50, nullable: true })
    punch_in_mode: string; // biometric, RFID, mobile

    @Column({ default: 'present' })
    status: string; // present, absent, leave

    @CreateDateColumn()
    recorded_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
