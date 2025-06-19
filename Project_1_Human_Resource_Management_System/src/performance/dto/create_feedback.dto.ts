
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFeedbackDto {
    @IsInt()
    from_id: number;

    @IsInt()
    to_id: number;

    @IsInt()
    cycle_id: number;

    @IsString()
    @IsNotEmpty()
    comments: string;

    @IsInt()
    @IsOptional()
    rating?: number;
}

