import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            secret: "shhhh",
            signOptions: { expiresIn: '60s' }
        })
    ],
    providers: [LocalStrategy, JwtStrategy, AuthService],
    exports: [AuthService]
})
export class AuthModule {}


