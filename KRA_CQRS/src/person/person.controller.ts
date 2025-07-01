import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetPersonsQuery } from './queries/impl/get-persons.query';
import { CreatePersonCommand } from './commands/impl/create-person.command';

@Controller('person')
export class PersonController {
    constructor(
        private queryBus: QueryBus,
        private commandBus: CommandBus,
    ) { }

    @Get()
    async getAllPerson() {
        return await this.queryBus.execute(new GetPersonsQuery());
    }

    @Post()
    @HttpCode(201)
    @UsePipes(new ValidationPipe({ transform: true }))
    async createPerson(@Body() payload: CreatePersonCommand) {
        await this.commandBus.execute(payload);
    }
}
