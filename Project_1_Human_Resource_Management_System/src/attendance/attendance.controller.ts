import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { UserRole } from 'src/auth/entities/user.entity';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { CreateAttendanceDto } from './dto/create_attendance.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt_auth.guard';
import { RoleGuard } from 'src/auth/guards/roles.guard';
import { UpdateAttendanceDto } from './dto/update_attendance.dto';

@Controller('attendance')
@UseGuards(JwtAuthGuard, RoleGuard)
export class AttendanceController {
    constructor(private readonly attendanceService: AttendanceService) { }

    @Roles(UserRole.ADMIN, UserRole.HR)
    @Get()
    getAllAttendances() {
        return this.attendanceService.getAllAttendances();
    }

    @Roles(UserRole.ADMIN, UserRole.HR, UserRole.USER)
    @Get(':employeeId')
    getAttendanceByEmployee(@Param('employeeId', ParseIntPipe) id: number) {
        return this.attendanceService.getAttendanceByEmployee(id);
    }

    @Roles(UserRole.ADMIN, UserRole.HR, UserRole.USER)
    @Post()
    createAttendance(@Body() dto: CreateAttendanceDto) {
        return this.attendanceService.createAttendance(dto);
    }

    @Roles(UserRole.ADMIN, UserRole.HR, UserRole.USER)
    @Put('punch-out/:attendanceId')
    punchOut(@Param('attendanceId', ParseIntPipe) id: number) {
        return this.attendanceService.punchOut(id);
    }
    
    @Roles(UserRole.ADMIN, UserRole.HR, UserRole.USER)
    @Get(':employeeId/:date')
    getAttendanceByEmployeeAndDate(
        @Param('employeeId', ParseIntPipe) employeeId: number,
        @Param('date') date: string
    ) {
        return this.attendanceService.getAttendanceByEmployeeAndDate(employeeId, date);
    }

    @Roles(UserRole.ADMIN, UserRole.HR)
    @Patch(':id')
    updateAttendance(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateAttendanceDto
    ) {
        return this.attendanceService.updateAttendance(id, dto);
    }

    @Roles(UserRole.ADMIN)
    @Delete(':id')
    deleteAttendance(@Param('id', ParseIntPipe) id: number) {
        return this.attendanceService.deleteAttendance(id);
    }
}


