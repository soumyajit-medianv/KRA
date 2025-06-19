import { Module } from '@nestjs/common';
import { EmployeeInfoController } from './employee-info.controller';
import { EmployeeInfoService } from './employee-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Department } from './entities/department.entity';
import { EmployeeDocuments } from './entities/documents.entity';
import { EmergencyContact } from './entities/emergency_contact.entity';
import { User } from 'src/auth/entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Employee, Department, EmployeeDocuments, EmergencyContact]),
    AuthModule,
  ],
  controllers: [EmployeeInfoController],
  providers: [EmployeeInfoService],
  exports: [EmployeeInfoService]
})
export class EmployeeInfoModule { }
