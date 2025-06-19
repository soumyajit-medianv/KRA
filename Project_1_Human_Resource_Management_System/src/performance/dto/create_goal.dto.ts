import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateGoalDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}

