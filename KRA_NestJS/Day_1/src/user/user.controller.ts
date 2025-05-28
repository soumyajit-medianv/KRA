import { Controller, Get } from '@nestjs/common';

@Controller('user') // Decorator- Base Route - When client hit the user route it execute getUser()
export class UserController {
    @Get() // Get Decorator - HTTP GET request.
    getUser() {
        return 'User data fetched successfully.';
    }
}

