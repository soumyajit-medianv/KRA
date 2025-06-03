import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './role.guard';
import { CONSTANTS } from './constant';

@Controller('app')
export class AppController {
  // constructor(private readonly appService: AppService) { }
  constructor(private readonly authService: AuthService) { }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {
    // Authentication
    const token = this.authService.generateToken(req.user)
    return token;
  }

  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.ADMIN))
  @Get('/admin')
  adminData(@Request() req): string {
    return "This is private data for admin" + JSON.stringify(req.user);
  }

  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.USER))
  @Get('/user')
  userData(@Request() req): string {
    return "This is private data for user" + JSON.stringify(req.user);
  }
}


