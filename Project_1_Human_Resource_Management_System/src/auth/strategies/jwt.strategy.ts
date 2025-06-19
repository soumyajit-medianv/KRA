import { Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "../auth.service";
import { ConfigService } from "@nestjs/config";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    // This strategy will going to extract the access token from bearer token and validate this user is a valid user or not. This automatically validate.

    constructor(
        private authService: AuthService,
        private configService: ConfigService,
    ) {

        const jwtSecret = configService.get<string>('JWT_ACCESS_SECRET');

        if (!jwtSecret) {
            throw new InternalServerErrorException('JWT_ACCESS_SECRET is not defined in environment variables');
        }

        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtSecret
        })
    }

    // payload -> Get the data from line no - 24
    async validate(payload: any) {
        try {
            const user = await this.authService.getUserById(payload.sub);
            return {
                id: user.user_id,
                role: user.role,
                email: user.email,
                name: user.name
            }
        }
        catch (error) {
            throw new UnauthorizedException('Invalid token');
        }
    }

}



