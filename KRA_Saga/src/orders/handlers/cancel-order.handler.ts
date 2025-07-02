import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CancleOrderCommand } from "../commands/cancel-order.command";

@CommandHandler(CancleOrderCommand)
export class CancleOrderHandler implements ICommandHandler<CancleOrderCommand> {
    async execute(command: CancleOrderCommand) {
        console.log(`Order ${command.orderId} has been cancelled.`);
    }
}


