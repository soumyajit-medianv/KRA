import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ProductRequest, ProductResponse, ProductServiceController, ProductServiceControllerMethods } from 'types/proto/products';

@Controller('product')
@ProductServiceControllerMethods() // every method inside the class is going to be a rpc
export class ProductController implements ProductServiceController {
    getProduct(request: ProductRequest): Promise<ProductResponse> | Observable<ProductResponse> | ProductResponse {
        return {
            productId: 1,
            name: "Laptop",
            price: 10000
        }
    }
}
