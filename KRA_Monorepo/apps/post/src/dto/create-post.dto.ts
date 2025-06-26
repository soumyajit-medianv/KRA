import { CreatePostDto as ICreatePostDto } from '@app/common';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreatePostDto implements ICreatePostDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-zA-Z\s]{3,50}$/, { message: 'Author name must contain only letters and spaces' })
    authorName: string;
}