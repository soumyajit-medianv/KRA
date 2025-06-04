import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AgeNameDobDto } from './dto/age_name_dob.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  validateUser(@Body() body: AgeNameDobDto) {
    return { message: 'Validation successful!', data: body };
  }
}
