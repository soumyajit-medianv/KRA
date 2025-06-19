import { IsInt, IsOptional } from "class-validator";

export class UpdateLeaveBalanceDto {
    @IsOptional()
    @IsInt()
    casual?: number;

    @IsOptional()
    @IsInt()
    sick?: number;

    @IsOptional()
    @IsInt()
    earned?: number;

    @IsOptional()
    @IsInt()
    unpaid?: number;
}

