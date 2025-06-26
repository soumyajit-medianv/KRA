import { NestFactory } from '@nestjs/core';
import { PostModule } from './post.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { POSTS_PACKAGE_NAME } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PostModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../post.proto'),
        package: POSTS_PACKAGE_NAME,
        url: 'localhost:5000'
      }
    }
  );
  await app.listen();
}
bootstrap();
