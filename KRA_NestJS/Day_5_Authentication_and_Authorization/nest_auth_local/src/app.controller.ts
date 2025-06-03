import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @UseGuards(AuthGuard('local'))
  getHello(@Request() req): string {
    return req.user;
    // Passport automatically creates a user object, based on the value we return from the validate() method, and assigns it to the Request object as req.user
  }

  // getHello(): string {
  //   return "This is private data.";
  // }
}
