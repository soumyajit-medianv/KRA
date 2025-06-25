import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from './constant';
import { OrdersController } from './orders/orders.controller';
import { ProductsController } from './products/products.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICROSERVICES_CLIENTS.ORDERS_SERVICE,
        transport: Transport.TCP,
        options: {
          port: 5001
        }
      },
      {
        name: MICROSERVICES_CLIENTS.PRODUCTS_SERVICE,
        transport: Transport.TCP,
        options: {
          port: 5002
        }
      },
      {
        name: MICROSERVICES_CLIENTS.USERS_SERVICE,
        transport: Transport.TCP,
        options: {
          port: 5003
        }
      },
    ])
  ],
  controllers: [AppController, OrdersController, ProductsController, UsersController],
  providers: [AppService],
})
export class AppModule { }
