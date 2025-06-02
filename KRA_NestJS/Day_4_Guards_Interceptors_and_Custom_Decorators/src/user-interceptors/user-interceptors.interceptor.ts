import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Request } from 'express';
import { map, Observable } from 'rxjs';

@Injectable()
export class UserInterceptorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    // console.log('Testing interceptors');
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    request.body.name = "John";
    // pipe -> getting the value one by one then map
    return next.handle().pipe(map((data) => {
      data = "From interceptor";
      return data;
    }));
  }
}
