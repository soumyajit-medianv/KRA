import { UpdatePostDto as IUpdatePostDto } from '@app/common';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdatePostDto implements IUpdatePostDto {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}