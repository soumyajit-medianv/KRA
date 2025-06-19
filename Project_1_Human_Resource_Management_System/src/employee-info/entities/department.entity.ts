import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";


@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    department_id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    description?: string;

    @OneToMany(() => Employee, (emp) => emp.department)
    employees: Employee[];

}





