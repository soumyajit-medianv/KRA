import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {

    getCategories(){
        return ['Mobile', 'Laptop', 'Tablet', 'Mouse', 'Keyboard'];
    }
}
