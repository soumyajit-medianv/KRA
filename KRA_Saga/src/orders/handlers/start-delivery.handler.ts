import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { StartDeliveryCommand } from "../commands/start-delivery.command";

@CommandHandler(StartDeliveryCommand)
export class StartDeliveryHandler implements ICommandHandler<StartDeliveryCommand> {
    async execute(command: StartDeliveryCommand) {
        console.log(`Starting delivery for order ${command.orderId}`);
    }
}


