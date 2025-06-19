import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { EmployeeInfoService } from './employee-info.service';
import { CreateDepartmentDto } from './dto/create_department.dto';
import { CreateEmployeeDto } from './dto/create_employee.dto';
import { CreateEmployeeDocumentDto } from './dto/create_employee_document.dto';
import { CreateEmergencyContactDto } from './dto/create_emergency_contact.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt_auth.guard';
import { RoleGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { User, UserRole } from 'src/auth/entities/user.entity';

@Controller('employee-info')
export class EmployeeInfoController {
    constructor(private readonly employeeInfoService: EmployeeInfoService) { }

    @Post('department')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(UserRole.ADMIN, UserRole.HR)
    createDepartment(@Body() departmentDto: CreateDepartmentDto) {
        return this.employeeInfoService.createDepartment(departmentDto);
    }

    @Post('create-employee')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(UserRole.ADMIN, UserRole.HR)
    createEmployee(@Body() employeeDto: CreateEmployeeDto) {
        return this.employeeInfoService.createEmployee(employeeDto);
    }

    @Post('documents')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(UserRole.ADMIN, UserRole.HR, UserRole.USER)
    addDocument(@Body() documentDto: CreateEmployeeDocumentDto) {
        return this.employeeInfoService.addDocument(documentDto);
    }

    @Post('emergency-contact')
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(UserRole.ADMIN, UserRole.HR, UserRole.USER)
    addEmergencyContact(@Body() contactDto: CreateEmergencyContactDto) {
        return this.employeeInfoService.addEmergencyContact(contactDto);
    }

    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(UserRole.ADMIN, UserRole.HR)
    @Get()
    getAllEmployees() {
        return this.employeeInfoService.getAllEmployees();
    }

    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(UserRole.ADMIN, UserRole.HR)
    @Get('department')
    getAllDepartments() {
        return this.employeeInfoService.getAllDepartments();
    }

    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(UserRole.ADMIN, UserRole.HR)
    @Get('documents')
    getAllDocuments() {
        return this.employeeInfoService.getAllDocuments();
    }

    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(UserRole.ADMIN, UserRole.HR)
    @Get('emergency-contacts')
    getAllEmergencyContacts() {
        return this.employeeInfoService.getAllEmergencyContacts();
    }

    @Get('department/:id')
    @UseGuards(JwtAuthGuard)
    getDepartmentById(@Param('id', ParseIntPipe) id: number) {
        return this.employeeInfoService.getDepartmentById(id);
    }

    @Get('emergency-contact/:employeeId')
    @UseGuards(JwtAuthGuard)
    getEmergencyContacts(@Param('employeeId', ParseIntPipe) employeeId: number) {
        return this.employeeInfoService.getEmergencyContactsById(employeeId);
    }

    @Get('documents/:employeeId')
    @UseGuards(JwtAuthGuard)
    getDocuments(@Param('employeeId', ParseIntPipe) employeeId: number) {
        return this.employeeInfoService.getDocumentsById(employeeId);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    getEmployeeById(@Param('id', ParseIntPipe) id: number) {
        return this.employeeInfoService.getEmployeeById(id);
    }

}




