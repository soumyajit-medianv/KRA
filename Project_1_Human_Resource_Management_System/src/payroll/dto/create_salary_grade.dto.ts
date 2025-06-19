import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSalaryGradeDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNumber()
    basic: number;

    @IsNumber()
    hra: number;

    @IsNumber()
    other_allowance: number;

    @IsNumber()
    pf: number;

    @IsNumber()
    esi: number;

    @IsNumber()
    tax: number;
}


