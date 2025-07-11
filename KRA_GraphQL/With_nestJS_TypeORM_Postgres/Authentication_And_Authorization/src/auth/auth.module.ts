import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthGuard } from './auth.guard';
import { JwtGuard } from './jwt.guard';

@Module({
    imports: [UserModule],
    providers: [AuthGuard, JwtGuard]
})
export class AuthModule { }
