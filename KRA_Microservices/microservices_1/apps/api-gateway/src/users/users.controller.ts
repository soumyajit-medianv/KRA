import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { MICROSERVICES_CLIENTS } from '../constant';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
    constructor(
        @Inject(MICROSERVICES_CLIENTS.USERS_SERVICE)
        private userServiceClient: ClientProxy
    ) { }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        return this.userServiceClient.send('get_user', id);
    }

}
