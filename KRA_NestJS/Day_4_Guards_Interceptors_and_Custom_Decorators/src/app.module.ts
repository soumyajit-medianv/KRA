import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { UserRolesController } from './user-roles/user-roles.controller';
import { UserInterceptorsModule } from './user-interceptors/user-interceptors.module';
// import * as joi from 'joi';
// import appConfig from './config/app.config';

// root module -> use all the sub modules

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes the configModule globally available

      // validationSchema: joi.object({
      //   APP_NAME: joi.string().default('defaultAppFromValidationSchema')
      // })

      // load: [appConfig], // custom config
    }),
    HelloModule, UserModule, UserInterceptorsModule],
  controllers: [AppController, UserRolesController],
  providers: [AppService],
})
export class AppModule { }
