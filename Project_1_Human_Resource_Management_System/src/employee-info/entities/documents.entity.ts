import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class EmployeeDocuments {
    @PrimaryGeneratedColumn()
    document_id: number;

    // Many-to-One relation with Employee (Each document belongs to one employee)
    @ManyToOne(() => Employee, (employee) => employee.documents)
    @JoinColumn({ name: 'employee_id' })
    employee: Employee;
    
    @Column()
    doc_type: string;

    @Column('text')
    file_url: string;

    @Column({ nullable: true })
    issue_date: Date;

    @Column({ nullable: true })
    expiry_date: Date;
}



