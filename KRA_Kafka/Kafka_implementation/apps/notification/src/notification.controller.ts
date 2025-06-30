import { Controller, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) { }

  @Get()
  getHello(): string {
    return this.notificationService.getHello();
  }

  @MessagePattern("order-created")
  sendOrderCreatedNotification(@Payload() data: any) {
    console.log("[Notification Service] Sending Order Created Email", data);
  }

  @MessagePattern("payment-succeed")
  sendPaymentSucceedNotification(@Payload() data: any) {
    console.log("[Notification Service] Sending Payment Succeed Email", data);
  }
}
