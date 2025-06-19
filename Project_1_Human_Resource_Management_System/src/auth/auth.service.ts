import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserRole } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private configService: ConfigService,
        private jwtService: JwtService,
    ) { }

    async register(registerDto: RegisterDto) {
        const existingUser = await this.usersRepository.findOne({
            where: { email: registerDto.email }
        });

        if (existingUser) {
            throw new ConflictException('Email already in use! Please try with different email.');
        }

        const hashedPassword = await this.hashPassword(registerDto.password);

        const newlyCreatedUser = this.usersRepository.create({
            email: registerDto.email,
            name: registerDto.name,
            password: hashedPassword,
            role: UserRole.USER
        });

        const savedUser = await this.usersRepository.save(newlyCreatedUser);

        const { password, ...result } = savedUser;
        return {
            user: result,
            message: 'Registration successfully! Please login to continue'
        }
    }

    async createAdmin(registerDto: RegisterDto) {
        const existingUser = await this.usersRepository.findOne({
            where: { email: registerDto.email }
        });

        if (existingUser) {
            throw new ConflictException('Email already in use! Please try with different email');
        }

        const hashedPassword = await this.hashPassword(registerDto.password);

        const newlyCreatedUser = this.usersRepository.create({
            email: registerDto.email,
            name: registerDto.name,
            password: hashedPassword,
            role: UserRole.ADMIN
        });

        const savedUser = await this.usersRepository.save(newlyCreatedUser);

        const { password, ...result } = savedUser;
        return {
            user: result,
            message: 'Admin user created successfully! Please login to continue'
        }
    }

    async createHr(registerDto: RegisterDto) {
        const existingUser = await this.usersRepository.findOne({
            where: { email: registerDto.email }
        });

        if (existingUser) {
            throw new ConflictException('Email already in use! Please try with different email');
        }

        const hashedPassword = await this.hashPassword(registerDto.password);

        const newlyCreatedUser = this.usersRepository.create({
            email: registerDto.email,
            name: registerDto.name,
            password: hashedPassword,
            role: UserRole.HR
        })

        const savedUser = await this.usersRepository.save(newlyCreatedUser);

        const { password, ...result } = savedUser;

        return {
            user: result,
            message: 'HR user created successfully! Please login to continue'
        }
    }

    async login(loginDto: LoginDto) {
        const user = await this.usersRepository.findOne({
            where: { email: loginDto.email }
        });

        if (!user || !(await this.verifyPassword(loginDto.password, user.password))) {
            throw new UnauthorizedException('Invalid credentials or account not exists');
        }

        // generate the token
        const tokens = this.generateTokens(user);
        const { password, ...result } = user;
        return {
            user: result,
            ...tokens
        }

    }

    async refreshToken(refreshToken: string) {
        try {
            const payload = this.jwtService.verify(refreshToken, {
                secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
            })

            const user = await this.usersRepository.findOne({
                where: { user_id: payload.sub }
            })

            if (!user) {
                throw new UnauthorizedException('Invalid token');
            }

            const accessToken = this.generateAccessToken(user);

            return { accessToken };
        }
        catch (e) {
            throw new UnauthorizedException('Invalid token');
        }
    }

    // Find the current user by id
    async getUserById(userId: number) {
        const user = await this.usersRepository.findOne({
            where: { user_id: userId }
        })

        if (!user) {
            throw new UnauthorizedException('User not found!');
        }

        const { password, ...result } = user;
        return result;
    }


    // Helper Fuctions
    private async hashPassword(password: string): Promise<string> {
        const saltRounds = this.configService.get<string>('SALT_OR_ROUNDS');
        return bcrypt.hash(password, Number(saltRounds));
    }

    private async verifyPassword(plainPassword: string, hashPassword: string): Promise<boolean> {
        return bcrypt.compare(plainPassword, hashPassword);
    }

    private generateTokens(user: User) {
        return {
            accessToken: this.generateAccessToken(user),
            refreshToken: this.generateRefreshTokens(user),
        }
    }

    private generateAccessToken(user: User): string {
        const payload = {
            email: user.email,
            sub: user.user_id,
            role: user.role
        }

        return this.jwtService.sign(payload, {
            secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
            expiresIn: '15m'
        });
    }

    private generateRefreshTokens(user: User): string {
        const payload = {
            sub: user.user_id,
        }

        return this.jwtService.sign(payload, {
            secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
            expiresIn: '7d'
        });
    }

}


