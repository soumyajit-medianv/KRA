import { CommandHandler, EventBus, ICommandHandler } from "@nestjs/cqrs";
import { ProcessPaymentCommand } from "../commands/process-payment.command";
import { PaymentSucceededEvent } from "../events/payment-succeeded.event";
import { PaymentFailedEvent } from "../events/payment-failed.event";

@CommandHandler(ProcessPaymentCommand)
export class ProcessPaymentHandler implements ICommandHandler<ProcessPaymentCommand> {
    constructor(private eventBus: EventBus) { }

    async execute(command: ProcessPaymentCommand) {
        console.log(`Processing payment for order ${command.orderId}...`);

        // Simulate payment result
        const paymentSuccessful = Math.random() > 0.5;
        if (paymentSuccessful) {
            console.log(`Payment succeeded for order ${command.orderId}`);
            this.eventBus.publish(new PaymentSucceededEvent(command.orderId));
        }
        else {
            console.log(`Payment failed for order ${command.orderId}`);
            this.eventBus.publish(new PaymentFailedEvent(command.orderId));
        }
    }
}


