import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";


@Entity()
export class EmergencyContact {
    @PrimaryGeneratedColumn()
    contact_id: number;

    // Many-to-One relation with Employee (Each emergency contact belongs to one employee)
    @ManyToOne(() => Employee, (employee) => employee.emergencyContacts)
    @JoinColumn({ name: 'employee_id' })
    employee: Employee;

    @Column()
    name: string;

    @Column()
    relation: string;

    @Column()
    phone: string;
}


