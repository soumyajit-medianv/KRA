import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CONSTANTS } from 'src/constant';

@Injectable()
export class UserService {
    public users: User[] = [
        { username: 'User1', password: 'admin1', email: 'user1@gmail.com', age: 22, role: CONSTANTS.ROLES.ADMIN },
        { username: 'User2', password: 'admin2', email: 'user1@gmail.com', age: 25, role: CONSTANTS.ROLES.USER },
        { username: 'User3', password: 'admin3', email: 'user1@gmail.com', age: 27, role: CONSTANTS.ROLES.USER },
    ]

    getUserByUserName(userName: string): User | undefined {
        return this.users.find(user => user.username === userName);
    }
}
