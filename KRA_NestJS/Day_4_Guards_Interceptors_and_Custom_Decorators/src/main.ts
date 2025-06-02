import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// root file -> Entry point of nestjs application.
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // creating instances 

  // global settings
  // env

  // start the http server and it listing to the port.
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
