import { NestFactory } from '@nestjs/core';
import { OrderModule } from './order.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrderModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ["localhost:9092"]
        },
        consumer: {
          groupId: "order-consumer-group"
        }
      }
    }
  );
  await app.listen();
  console.log("Order microservice is listening to kafka");
}
bootstrap();
