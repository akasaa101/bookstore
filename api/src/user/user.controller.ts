import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  RequestWithUser,
  UserWithoutPassword,
} from '../auth/request-with-user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Req() request: RequestWithUser): Promise<UserWithoutPassword> {
    const { user } = request;
    const userWithoutPassword: UserWithoutPassword = {
      id: user.id,
      username: user.username,
      displayName: user.displayName,
      createdAt: user.createdAt,
    };
    return userWithoutPassword;
  }
}
