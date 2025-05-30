import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MynameController } from './myname/myname.controller';
import { ProductModule } from './product/product.module';
import { UserRolesController } from './user-roles/user-roles.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';

@Module({
  imports: [ProductModule],
  controllers: [AppController, MynameController, UserRolesController, ExceptionController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Here consumer.apply() mean which middleware you want to apply for which routes.
    // forRoutes('*') - apply middleware in all routes.
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
