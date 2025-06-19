import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), "src/schema.graphql"),
      // definitions => Automatically generate interface that follow the schema structure.
      definitions: {
        path: join(process.cwd(), "src/graphql.ts")
      },
    }),
    BookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
