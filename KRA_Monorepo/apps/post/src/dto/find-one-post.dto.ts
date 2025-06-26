import { FindOnePostDto as IFindOnePostDto } from '@app/common';
import { IsUUID } from 'class-validator';

export class FindOnePostDto implements IFindOnePostDto {
    @IsUUID()
    id: string;
}
