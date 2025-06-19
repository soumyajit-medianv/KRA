import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserRole } from "../entities/user.entity";
import { ROLES_KEY } from "../decorators/roles.decorator";

@Injectable()
export class RoleGuard implements CanActivate {

    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
            ROLES_KEY, [
            context.getHandler(), // method level metadata
            context.getClass(), // class level metadata
        ]
        );
        
        // Anyone can access
        if (!requiredRoles) {
            return true;
        }
        
        const { user } = context.switchToHttp().getRequest();
        if (!user) {
            throw new ForbiddenException('User is not authenticated');
        }

        const hasRequiredRole = requiredRoles.some(role => user.role === role);

        if (!hasRequiredRole) {
            throw new ForbiddenException('Insufficient permission');
        }

        return true;
    }

}


// Workflow ->  JwtAuthGuard -> validate the token and attach the current user in the request -> RoleGuard check if current user role matches the required role -> if match found proceed to controller -> if not forbidden exception




