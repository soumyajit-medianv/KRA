import { Employee } from "src/employee-info/entities/employee.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SalaryGrade {
    @PrimaryGeneratedColumn()
    grade_id: number;

    @Column()
    title: string;

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

    @OneToMany(() => Employee, employee => employee.salary_grade)
    employees: Employee[];
}



