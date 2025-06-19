import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateEmployeeDocumentDto {
  @IsNumber()
  employee_id: number;

  @IsString()
  @IsNotEmpty()
  doc_type: string;

  @IsString()
  @IsNotEmpty()
  file_url: string;


  @IsOptional()
  @Type(() => Date)
  @IsDate()
  issue_date?: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  expiry_date?: Date;
}
