import {
    IsDate,
    IsOptional,
    IsPhoneNumber,
    IsNumber,
    IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEmployeeDto {
    @IsNumber()
    user_id: number;

    @IsOptional()
    @IsPhoneNumber('IN')
    phone?: string;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    dob?: Date;

    @IsOptional()
    @IsString()
    gender?: string;

    @IsOptional()
    @IsString()
    designation?: string;

    @IsOptional()
    @IsNumber()
    department_id?: number;

    @IsOptional()
    @IsNumber()
    manager_id?: number;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    date_of_joining?: Date;

    @IsOptional()
    @IsString()
    current_status?: string;

    @IsNumber()
    @IsOptional()
    salary_grade: number; // 
}


