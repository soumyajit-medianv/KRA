import {
    IsDate,
    IsEnum,
    IsIn,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum AttendanceStatus {
    PRESENT = 'present',
    ABSENT = 'absent',
    LEAVE = 'leave',
}

export class CreateAttendanceDto {
    @IsNumber()
    @IsNotEmpty()
    employee_id: number;

    @IsDate()
    @Type(() => Date)
    date: Date;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    clock_in?: Date;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    clock_out?: Date;

    @IsOptional()
    @IsNumber()
    total_worked_minutes?: number;

    @IsOptional()
    @IsNumber()
    overtime_minutes?: number;

    @IsOptional()
    @IsIn(['biometric', 'RFID', 'mobile'])
    @IsString()
    punch_in_mode?: string;

    @IsOptional()
    @IsEnum(AttendanceStatus)
    status?: AttendanceStatus;
}
