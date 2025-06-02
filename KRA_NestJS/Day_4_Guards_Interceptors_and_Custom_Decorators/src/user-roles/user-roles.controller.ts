import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guards/roles/role.decorator';
import { Role } from 'src/guards/roles/role.enums';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    getAdminData() {
        return { message: "Only admin can access" };
    }

    @Get('user-data')
    @Roles(Role.User)
    @UseGuards(RolesGuard)
    getUserData() {
        return { message: "User can access data" };
    }

    @Get('everyone')
    getData() {
        return { message: "Anyone can access data" };
    }

}
