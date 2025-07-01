import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreatePersonCommand } from "../impl/create-person.command";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/entities/person/person";
import { Repository } from "typeorm";

@CommandHandler(CreatePersonCommand)
export class CreatePersonHandler implements ICommandHandler<CreatePersonCommand> {

    constructor(
        @InjectRepository(Person)
        private personRepo: Repository<Person>
    ) { }

    async execute(command: CreatePersonCommand): Promise<any> {
        let newPerson = new Person()
        newPerson.age = command.age;
        newPerson.name = command.name;

        await this.personRepo.insert(newPerson);
    }
}
