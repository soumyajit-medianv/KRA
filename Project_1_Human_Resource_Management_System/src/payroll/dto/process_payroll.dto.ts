import { IsInt, IsNotEmpty } from "class-validator";


export class ProcessPayrollDto {
    @IsInt()
    @IsNotEmpty()
    employee_id: number;
}

