import { Employee } from "src/employee-info/entities/employee.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payroll {
    @PrimaryGeneratedColumn()
    payroll_id: number;

    @ManyToOne(() => Employee, employee => employee.payrolls)
    // @JoinColumn({ name: 'employee_id' })
    employee: Employee;
    
    @Column('decimal')
    basic: number;

    @Column('decimal')
    hra: number;

    @Column('decimal')
    other_allowance: number;

    @Column('decimal')
    pf: number;

    @Column('decimal')
    esi: number;

    @Column('decimal')
    tax: number;

    @Column('decimal')
    gross_salary: number;

    @Column('decimal')
    net_salary: number;

    @CreateDateColumn()
    processed_at: Date;
    
}

