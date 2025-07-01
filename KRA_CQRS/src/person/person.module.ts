import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { GetPersonsHandler } from './queries/handler/get-persons.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/entities/person/person';
import { CreatePersonHandler } from './commands/handler/create-person.handler';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([Person])
  ],
  controllers: [PersonController],
  providers: [GetPersonsHandler, CreatePersonHandler]
})
export class PersonModule { }
