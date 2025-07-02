import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { OrderSaga } from './sagas/order.saga';
import { ProcessPaymentHandler } from './handlers/process-payment.handler';
import { CancleOrderHandler } from './handlers/cancel-order.handler';
import { StartDeliveryHandler } from './handlers/start-delivery.handler';

@Module({
  imports: [CqrsModule],
  controllers: [OrdersController],
  providers: [
    OrderSaga,
    ProcessPaymentHandler,
    CancleOrderHandler,
    StartDeliveryHandler,
  ]
})
export class OrdersModule { }


