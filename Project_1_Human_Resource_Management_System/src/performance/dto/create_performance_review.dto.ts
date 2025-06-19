import { IsIn, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreatePerformanceReviewDto {
    @IsInt()
    reviewer_id: number;

    @IsInt()
    reviewee_id: number;

    @IsInt()
    cycle_id: number;

    @IsInt()
    rating: number;

    @IsString()
    @IsNotEmpty()
    feedback: string;
}

