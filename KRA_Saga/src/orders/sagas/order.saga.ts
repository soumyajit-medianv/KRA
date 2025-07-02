import { ICommand, Saga } from "@nestjs/cqrs";
import { filter, map, Observable } from "rxjs";
import { OrderCreatedEvent } from "../events/order-created.event";
import { PaymentSucceededEvent } from "../events/payment-succeeded.event";
import { PaymentFailedEvent } from "../events/payment-failed.event";
import { ProcessPaymentCommand } from "../commands/process-payment.command";
import { StartDeliveryCommand } from "../commands/start-delivery.command";
import { CancleOrderCommand } from "../commands/cancel-order.command";

export class OrderSaga {
    @Saga()
    orderProcess = (event$: Observable<any>): Observable<ICommand | undefined> => {
        return event$.pipe(
            filter(event =>
                event instanceof OrderCreatedEvent ||
                event instanceof PaymentSucceededEvent ||
                event instanceof PaymentFailedEvent
            ),
            map(event => {
                if (event instanceof OrderCreatedEvent) {
                    console.log(`Saga: OrderCreatedEvent received for ${event.orderId}`);
                    return new ProcessPaymentCommand(event.orderId);
                }

                if (event instanceof PaymentSucceededEvent) {
                    console.log(`Saga: PaymentSucceedEvent received for ${event.orderId}`);
                    return new StartDeliveryCommand(event.orderId);
                }

                if (event instanceof PaymentFailedEvent) {
                    console.log(`Saga: PaymentFailedEvent received for ${event.orderId}`);
                    return new CancleOrderCommand(event.orderId);
                }
            }),
        );
    };
}



