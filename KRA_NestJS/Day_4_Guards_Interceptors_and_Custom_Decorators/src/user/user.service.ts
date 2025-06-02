import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';


@Injectable()
export class UserService {
    // Injecting service from other modules
    // hello module must export HelloService
    // user module must import HelloModule -> because HelloService part of HelloModule
    constructor(private readonly helloService: HelloService) { }

    getAllUsers() {
        return [
            { id: 1, name: "John" },
            { id: 2, name: "Alice" },
            { id: 3, name: "Mark" }
        ]
    }

    getUserById(id: number) {
        const user = this.getAllUsers().find(user => user.id === id);
        return user;
    }


    // Using service from different module
    getWelcomeMessage(userId: number) {
        const user = this.getUserById(userId);
        if (!user) return "User not found.";
        return this.helloService.getHelloWithName(user?.name);
    }

}
