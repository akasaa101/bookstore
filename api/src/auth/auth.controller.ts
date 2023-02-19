import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User, Prisma } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() userData: Prisma.UserCreateInput): Promise<User> {
    return this.authService.createUser(userData);
  }

  @Post('login')
  async login(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<{ user: User; accessToken: string }> {
    const { user, accessToken } = await this.authService.loginUser(userData);
    return { user, accessToken };
  }
}
