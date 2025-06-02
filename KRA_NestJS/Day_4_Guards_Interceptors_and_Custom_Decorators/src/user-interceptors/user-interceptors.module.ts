import { Module } from '@nestjs/common';
import { UserInterceptorsController } from './user-interceptors.controller';

@Module({
  controllers: [UserInterceptorsController]
})
export class UserInterceptorsModule {}
