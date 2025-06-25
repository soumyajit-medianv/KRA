import { Body, Controller, Inject, Post } from '@nestjs/common';
import { MICROSERVICES_CLIENTS } from '../constant';
import { ClientProxy } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {

    constructor(
        @Inject(MICROSERVICES_CLIENTS.ORDERS_SERVICE)
        private orderServiceClient: ClientProxy,
    ) { }

    @Post()
    createOrder(@Body() order: any) {
        return this.orderServiceClient.send('create_order', order);
    }

}
