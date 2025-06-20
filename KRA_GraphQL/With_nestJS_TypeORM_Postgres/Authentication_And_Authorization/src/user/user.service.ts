import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>
    ) { }


    async findUserByEmail(email: string): Promise<User> {
        let user = await this.userRepo.findOne({
            where: { email: email }
        })

        if (!user) {
            throw new NotFoundException(`User not found`);
        }

        return user;
    }

    
    


}
