import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppResolver } from './app.resolver';
import { BookModule } from './book/book.module';
import { BookEntity } from './book/entities/book.entity';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), "src/schema.graphql"),
      definitions: {
        path: join(process.cwd(), "src/graphql.ts")
      }
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        isGlobal: true
      })],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USERNAME'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        synchronize: configService.get<boolean>('POSTGRES_SYNC'),
        entities: [BookEntity]
      }),
      inject: [ConfigService],
    }),

    BookModule,

  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule { }


