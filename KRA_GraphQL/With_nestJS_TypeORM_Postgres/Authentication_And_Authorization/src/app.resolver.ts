import { UseGuards } from "@nestjs/common";
import { Args, Context, Query, Resolver } from "@nestjs/graphql";
import { AuthGuard } from "./auth/auth.guard";
import { User } from "./user/entities/user.entity";
import * as jwt from "jsonwebtoken";
import { JwtGuard } from "./auth/jwt.guard";
import { RoleGuard, Roles } from "./auth/role.guard";

@Resolver(of => String)
export class AppResolver {

    @Query(returns => String)
    index(): string {
        return "NestJs Graphql Server";
    }

    @Query(returns => String)
    @UseGuards(JwtGuard, new RoleGuard(Roles.ADMIN))
    securedDataForAdmin(): string {
        return "This is secured data for admin";
    }

    @Query(returns => String)
    @UseGuards(JwtGuard, new RoleGuard(Roles.USER))
    securedDataForUser(): string {
        return "This is secured data for user";
    }

    @Query(returns => String)
    @UseGuards(AuthGuard)
    login(
        @Args({ name: "email", type: () => String }) email: string,
        @Args({ name: "password", type: () => String }) password: string,
        @Context("user") user: User
    ): string {
        let payload = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role
        }

        return jwt.sign(payload, "secret_key", { expiresIn: "60s" });
    }
}


