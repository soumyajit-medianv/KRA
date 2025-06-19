import {
    IsDate,
    IsEnum,
    IsIn,
    IsNumber,
    IsOptional,
    IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { AttendanceStatus } from './create_attendance.dto';

export class UpdateAttendanceDto {
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
