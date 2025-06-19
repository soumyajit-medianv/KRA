import { IsDateString, IsNotEmpty, IsString } from "class-validator";


export class CreateAppraisalCycleDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsDateString()
    start_date: string;

    @IsDateString()
    end_date: string;
}


