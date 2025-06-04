import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'isValidDOB', async: false })
export class IsValidDOB implements ValidatorConstraintInterface {
    validate(dob: string) {
        const dobDate = new Date(dob).getTime();
        const today = new Date();
        // Calculate the minimum valid DOB timestamp (15 years ago from today)
        today.setFullYear(today.getFullYear() - 15);
        const minDobTime = today.getTime();

        return dobDate <= minDobTime;
    }

    defaultMessage() {
        return 'DOB must be at least 15 years before today';
    }
}
