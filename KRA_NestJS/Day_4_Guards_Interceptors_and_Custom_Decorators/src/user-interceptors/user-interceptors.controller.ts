import { Controller, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { UserInterceptorsInterceptor } from './user-interceptors.interceptor';
import { Request, Response } from 'express';

@Controller('user-interceptors')
export class UserInterceptorsController {

    @Post()
    @UseInterceptors(UserInterceptorsInterceptor)
    // getMsg(@Req() req: Request, @Res() res: Response): any {
    getMsg(): any {
        // return res.json(req.body);
        return "This is the response.";
    }
}
