import { User } from "src/auth/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Department } from "./department.entity";
import { EmployeeDocuments } from "./documents.entity";
import { EmergencyContact } from "./emergency_contact.entity";
import { Attendance } from "src/attendance/entities/attendance.entity";
import { Leave } from "src/leave/entities/leave.entity";
import { LeaveBalance } from "src/leave/entities/leave_balance.entity";
import { SalaryGrade } from "src/payroll/entities/salary_grade.entity";
import { Payroll } from "src/payroll/entities/payroll.entity";
import { Goal } from "src/performance/entities/goal.entity";
import { PerformanceReview } from "src/performance/entities/performance_review.entity";
import { Feedback } from "src/performance/entities/feedback.entity";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    employee_id: number;

    @Column({ nullable: true })
    phone: string;

    @Column({ nullable: true })
    dob: Date;

    @Column({ nullable: true })
    gender: string;

    @Column({ nullable: true })
    designation: string;

    // Many-to-One relation with Department (Many employees can belong to one department)
    @ManyToOne(() => Department, { nullable: true })
    @JoinColumn({ name: 'department_id' })
    department: Department;

    // Self-referencing Many-to-One relation (An employee may report to another employee)
    @ManyToOne(() => Employee, { nullable: true })
    @JoinColumn({ name: 'manager_id' })
    manager: Employee;

    @Column({ nullable: true })
    date_of_joining: Date;

    @Column({ default: 'active' })
    current_status: string;

    // One-to-One relation with User (Each employee is linked to one user account)
    @OneToOne(() => User, (user) => user.employee, { cascade: true })
    @JoinColumn({ name: 'user_id' })
    user: User;

    // One-to-Many relation with EmployeeDocument (An employee can have multiple documents)
    @OneToMany(() => EmployeeDocuments, (doc) => doc.employee)
    documents: EmployeeDocuments[];

    // One-to-Many relation with EmergencyContact (An employee can have multiple emergency contacts)
    @OneToMany(() => EmergencyContact, (contact) => contact.employee)
    emergencyContacts: EmergencyContact[];

    @OneToMany(() => Attendance, (attendance) => attendance.employee)
    attendanceRecords: Attendance[];

    @OneToMany(() => Leave, (leave) => leave.employee)
    leaveRequests: Leave[];

    @OneToOne(() => LeaveBalance, (balance) => balance.employee)
    leaveBalance: LeaveBalance;

    @ManyToOne(() => SalaryGrade, grade => grade.employees)
    salary_grade: SalaryGrade;

    @OneToMany(() => Payroll, payroll => payroll.employee)
    payrolls: Payroll[];

    @OneToMany(() => Goal, goal => goal.employee)
    goals: Goal[];

    @OneToMany(() => PerformanceReview, review => review.reviewee)
    received_reviews: PerformanceReview[];

    @OneToMany(() => PerformanceReview, review => review.reviewer)
    given_reviews: PerformanceReview[];

    @OneToMany(() => Feedback, fb => fb.to)
    feedback_received: Feedback[];

    @OneToMany(() => Feedback, fb => fb.from)
    feedback_given: Feedback[];

    // @Column({ nullable: true })
    // bank_account_no: string;

    // @Column({ nullable: true })
    // ifsc_code: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}


