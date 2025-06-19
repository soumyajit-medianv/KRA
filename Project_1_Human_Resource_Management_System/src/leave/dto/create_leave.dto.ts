import {
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { LeaveType } from '../entities/leave.entity';


export class CreateLeaveDto {
  @IsNotEmpty()
  @IsInt()
  employee_id: number;

  @IsEnum(LeaveType)
  type: LeaveType;

  @Type(() => Date)
  @IsDate()
  start_date: Date;

  @Type(() => Date)
  @IsDate()
  end_date: Date;

  @IsInt()
  total_days: number;

  @IsOptional()
  @IsString()
  reason?: string;
}
