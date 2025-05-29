import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    private employees = [
        { id: 1, name: "Alice Johnson", position: "Software Engineer", department: "IT", salary: 75000, isActive: true },
        { id: 2, name: "Bob Smith", position: "Product Manager", department: "Product", salary: 85000, isActive: true },
        { id: 3, name: "Charlie Lee", position: "Data Analyst", department: "Analytics", salary: 65000, isActive: false },
        { id: 4, name: "Dana White", position: "HR Manager", department: "Human Resources", salary: 70000, isActive: true },
        { id: 5, name: "Ethan Brown", position: "Sales Executive", department: "Sales", salary: 60000, isActive: false }
    ];

    getAllEmployees() {
        return this.employees;
    }

    getEmployeeById(id: number) {
        return this.employees.find((employee) => employee.id === id);
    }

}
