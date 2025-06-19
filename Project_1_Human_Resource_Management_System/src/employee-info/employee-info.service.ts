import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { User } from 'src/auth/entities/user.entity';
import { EmployeeDocuments } from './entities/documents.entity';
import { EmergencyContact } from './entities/emergency_contact.entity';
import { CreateDepartmentDto } from './dto/create_department.dto';
import { CreateEmployeeDto } from './dto/create_employee.dto';
import { CreateEmployeeDocumentDto } from './dto/create_employee_document.dto';
import { CreateEmergencyContactDto } from './dto/create_emergency_contact.dto';


@Injectable()
export class EmployeeInfoService {
    constructor(
        @InjectRepository(Department)
        private departmentRepository: Repository<Department>,

        @InjectRepository(Employee)
        private employeeRepository: Repository<Employee>,

        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(EmployeeDocuments)
        private docRepo: Repository<EmployeeDocuments>,

        @InjectRepository(EmergencyContact)
        private contactRepo: Repository<EmergencyContact>,
    ) { }

    async createDepartment(departmentDto: CreateDepartmentDto): Promise<Department> {
        const department = this.departmentRepository.create(departmentDto);
        return await this.departmentRepository.save(department);
    }

    async createEmployee(employeeDto: CreateEmployeeDto): Promise<Employee> {
        const { user_id, department_id, manager_id, ...employeeData } = employeeDto;

        const user = await this.userRepository.findOne({
            where: { user_id }
        })

        if (!user) {
            throw new NotFoundException(`User with ID ${user_id} not found`);
        }

        const employee = new Employee();
        employee.user = user;

        if (department_id) {
            const department = await this.departmentRepository.findOne({
                where: { department_id }
            });

            if (!department) {
                throw new NotFoundException('Department not found');
            }

            employee.department = department;
        }

        if (manager_id) {
            const manager = await this.employeeRepository.findOne({
                where: { employee_id: manager_id }
            })

            if (!manager) {
                throw new NotFoundException('Manager not found');
            }

            employee.manager = manager;
        }

        Object.assign(employee, employeeData);

        const savedEmployee = await this.employeeRepository.save(employee);

        return savedEmployee;
    }

    async addDocument(documentDto: CreateEmployeeDocumentDto): Promise<EmployeeDocuments> {
        const employee = await this.employeeRepository.findOne({
            where: { employee_id: documentDto.employee_id }
        })

        if (!employee) {
            throw new NotFoundException('Employee not found');
        }

        const document = this.docRepo.create({ ...documentDto, employee });
        const savedDocument = await this.docRepo.save(document);
        return savedDocument;
    }

    async addEmergencyContact(contactDto: CreateEmergencyContactDto): Promise<EmergencyContact> {
        const employee = await this.employeeRepository.findOne({
            where: { employee_id: contactDto.employee_id }
        })

        if (!employee) {
            throw new NotFoundException('Employee not found');
        }

        const contact = this.contactRepo.create({ ...contactDto, employee });
        const savedContact = await this.contactRepo.save(contact);
        return savedContact;
    }

    // getAllEmployees
    async getAllEmployees(): Promise<Employee[]> {
        return this.employeeRepository.find({
            relations: ['user', 'department', 'manager'],
            order: { employee_id: 'ASC' },
        })
    }

    // getEmployeeById
    async getEmployeeById(id: number): Promise<Employee> {
        const employee = await this.employeeRepository.findOne({
            where: { employee_id: id },
            relations: ['user', 'department', 'manager'],
        });

        if (!employee) {
            throw new NotFoundException('Employee not found');
        }

        return employee;
    }

    // getAllDepartments
    async getAllDepartments(): Promise<Department[]> {
        return await this.departmentRepository.find({
            relations: ['employees'],
        });
    }

    // getDepartmentById
    async getDepartmentById(id: number): Promise<Department> {
        const department = await this.departmentRepository.findOne({
            where: { department_id: id },
            relations: ['employees'],
        });

        if (!department) {
            throw new NotFoundException('Department not found');
        }

        return department;
    }

    // getAllEmergencyContacts
    async getAllEmergencyContacts(): Promise<EmergencyContact[]> {
        return this.contactRepo.find({
            relations: ['employee'],
        });
    }

    // getEmergencyContactsById
    async getEmergencyContactsById(employeeId: number): Promise<EmergencyContact[]> {
        const contacts = await this.contactRepo.find({
            where: { employee: { employee_id: employeeId } },
        })
        return contacts;
    }

    // getAllDocuments
    async getAllDocuments(): Promise<EmployeeDocuments[]> {
        return this.docRepo.find({
            relations: ['employee'], // Make sure this matches your entity relation name
        });
    }

    // getDocumentsById
    async getDocumentsById(employeeId: number): Promise<EmployeeDocuments[]> {
        const docs = await this.docRepo.find({
            where: { employee: { employee_id: employeeId } },
            // relations: ['employee'],
        })

        return docs;
    }
}



