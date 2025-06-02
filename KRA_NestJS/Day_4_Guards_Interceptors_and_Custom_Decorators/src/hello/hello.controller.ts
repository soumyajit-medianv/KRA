import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';

// http://localhost:3000/hello

@Controller('hello')
export class HelloController {
    // dependency injection
    // private -> This private keywords in the constructor automatically create and initialize a class property with the same name.
    constructor(private readonly helloService: HelloService) { }

    @Get()
    getHello(): string {
        return this.helloService.getHello();
    }

    // using params -> http://localhost:3000/hello/user/soumya
    @Get('/user/:name')
    getHelloWithName(@Param('name') name: string): string {
        return this.helloService.getHelloWithName(name);
    }

    // using query -> http://localhost:3000/hello/query?name=soumya
    @Get('/query')
    getHelloWithQuery(@Query('name') name: string): string {
        return this.helloService.getHelloWithName(name || 'world');
    }

    
}
