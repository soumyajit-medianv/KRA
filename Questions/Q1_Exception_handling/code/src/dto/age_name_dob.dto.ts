// age-name-dob.dto.ts
import { IsInt, Min, Max, Matches, MaxLength, IsDateString, Validate } from 'class-validator';
import { IsValidDOB } from 'src/validator/dob.validator';

export class AgeNameDobDto {
    @IsInt()
    @Min(1)
    @Max(110)
    age: number;

    @Matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, {
        message: 'Name must contain only alphabets and single spaces between words',
    })
    @MaxLength(40)
    name: string;

    @IsDateString()
    @Validate(IsValidDOB)
    dob: string;
}
