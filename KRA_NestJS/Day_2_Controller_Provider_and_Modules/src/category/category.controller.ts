import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category') // Controller listen HTTP request and forward to services.
export class CategoryController {
    // The @Controller tell that it not a normal class it handle HTTP request.
    // This class depend on the CategoryService class.
    constructor(private readonly categoryService: CategoryService){} //This line tell inject dependecies. 

    @Get()
    getAllCategories(){
        return this.categoryService.getCategories();
    }
}

