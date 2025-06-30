import { Controller, Get, Inject } from '@nestjs/common';
import { OrderService } from './order.service';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    @Inject("KAFKA_SERVICE")
    private readonly kafkaClient: ClientKafka,
  ) { }

  @Get()
  getHello(): string {
    return this.orderService.getHello();
  }

  @MessagePattern("order-created")
  handleOrderCreated(@Payload() order: any) { //Payload => getting the body of the message from the topic
    console.log("[Order-Service]: Received new order: ", order);

    // Simulate processing the order
    this.kafkaClient.emit("process-payment", order);
  }
}
