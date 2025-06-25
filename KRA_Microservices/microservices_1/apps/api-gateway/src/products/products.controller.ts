import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { MICROSERVICES_CLIENTS } from '../constant';
import { ClientProxy } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
    constructor(
        @Inject(MICROSERVICES_CLIENTS.PRODUCTS_SERVICE)
        private productServiceClient: ClientProxy
    ) { }

    @Get(':id')
    getProduct(@Param('id', ParseIntPipe) id: number) {
        return this.productServiceClient.send('get_product', id);
    }
    
}
