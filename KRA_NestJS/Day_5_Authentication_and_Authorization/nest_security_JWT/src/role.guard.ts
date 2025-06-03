import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

export class RoleGuard implements CanActivate {

    private rollPassed: string;

    constructor(role: string) {
        this.rollPassed = role;
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const ctx = context.switchToHttp();
        const request: any = ctx.getRequest<Request>();
        return this.rollPassed === request.user.role;
    }
}


