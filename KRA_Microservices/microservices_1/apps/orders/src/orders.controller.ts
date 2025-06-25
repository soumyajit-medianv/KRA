import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  @MessagePattern('create_order')
  createOrder(order: any) {
    console.log({ message: "Order received on Order Microservice", order });
    return { message: 'Order created', order };
  }
}
