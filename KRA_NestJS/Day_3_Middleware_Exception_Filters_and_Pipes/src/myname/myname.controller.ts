import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('myname')
export class MynameController {
    @Post('custom') // http://localhost:3000/myname/custom
    // @Body('name', new UppercasePipe()) name: string) - It extracts only the name property from the request body. Additionally, it applies the custom UppercasePipe to transform the value.
    // It passes 'soumya' through UppercasePipe and the parameter name becomes 'SOUMYA'.
    transformName(@Body('name', new UppercasePipe()) name: string) {
        return { message: `Received name: ${name}` };
    }
}


