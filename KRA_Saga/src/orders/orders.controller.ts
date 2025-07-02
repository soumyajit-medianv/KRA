import { Controller, Param, Post } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { OrderCreatedEvent } from './events/order-created.event';

@Controller('orders')
export class OrdersController {
    constructor(private readonly eventBus: EventBus) { }

    @Post(':id')
    async createOrder(@Param('id') id: string) {
        console.log(`Controller: Publishing OrderCreatedEvent for ${id}`);
        this.eventBus.publish(new OrderCreatedEvent(id));
        return `Order ${id} created. Saga will process it.`;
    }
}


