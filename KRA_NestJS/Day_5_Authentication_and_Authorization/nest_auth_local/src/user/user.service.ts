import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
    public users: User[] = [
        { username: "User1", password: "admin1", email: "user1@gmail.com" },
        { username: "User2", password: "admin2", email: "user2@gmail.com" },
        { username: "User3", password: "admin3", email: "user3@gmail.com" },
    ]

    getUserByName(userName: string): User | undefined {
        return this.users.find(user => user.username === userName);
    }
}
