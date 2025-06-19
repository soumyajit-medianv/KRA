import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { LeaveService } from './leave.service';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRole } from 'src/auth/entities/user.entity';
import { CreateLeaveDto } from './dto/create_leave.dto';
import { LeaveStatus } from './entities/leave.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt_auth.guard';
import { RoleGuard } from 'src/auth/guards/roles.guard';
import { UpdateLeaveBalanceDto } from './dto/update_leave_balance.dto';

@Controller('leave')
@UseGuards(JwtAuthGuard, RoleGuard)
export class LeaveController {
    constructor(private readonly leaveService: LeaveService) { }

    @Roles(UserRole.USER, UserRole.ADMIN, UserRole.HR)
    @Post()
    applyForLeave(@Body() dto: CreateLeaveDto) {
        return this.leaveService.applyForLeave(dto);
    }

    @Roles(UserRole.ADMIN, UserRole.HR)
    @Get()
    getAllLeaves() {
        return this.leaveService.getAllLeaves();
    }

    @Roles(UserRole.ADMIN, UserRole.HR)
    @Patch('status/:id')
    updateLeaveStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status') status: LeaveStatus,
    ) {
        return this.leaveService.updateLeaveStatus(id, status);
    }

    @Roles(UserRole.ADMIN, UserRole.HR, UserRole.USER)
    @Get('balance/:employeeId')
    getBalance(@Param('employeeId', ParseIntPipe) id: number) {
        return this.leaveService.getBalanceByEmployee(id);
    }

    @Roles(UserRole.ADMIN, UserRole.HR)
    @Patch('balance/:employeeId')
    updateBalance(@Param('employeeId', ParseIntPipe) id: number, @Body() dto: UpdateLeaveBalanceDto) {
        return this.leaveService.updateBalance(id, dto);
    }
    
    @Roles(UserRole.ADMIN, UserRole.HR)
    @Post('balance/:employeeId')
    createInitialBalance(@Param('employeeId', ParseIntPipe) id: number) {
        return this.leaveService.createInitialBalance(id);
    }

    @Roles(UserRole.USER, UserRole.ADMIN, UserRole.HR)
    @Get(':employeeId')
    getLeavesByEmployee(@Param('employeeId', ParseIntPipe) id: number) {
        return this.leaveService.getLeavesByEmployee(id);
    }

    @Roles(UserRole.ADMIN)
    @Delete(':id')
    deleteLeave(@Param('id', ParseIntPipe) id: number) {
        return this.leaveService.deleteLeave(id);
    }
}


