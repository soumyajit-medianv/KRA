import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './roles.enums';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // requiredRoles - It is used the reflector to get the roles from decorator.
    // getAllAndOverride - It is a method of reflector to get all values of type Role.
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
      ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]
      // ROLES_KEY = key and [context.getHandler(),context.getClass()] =  value (Where getHandler() - it is used to get handler metadata getClass() - it is used to get class metadata )
    );

    if (!requiredRoles) return true;
    const request = context.switchToHttp().getRequest<{ headers: Record<string, string> }>()
    const userRole = request.headers['x-user-role'] as Role;
    return requiredRoles.includes(userRole);
  }
}


