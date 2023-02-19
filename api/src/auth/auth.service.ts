import {
  Injectable,
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(userData: Prisma.UserCreateInput): Promise<User> {
    if (!userData.username || !userData.password || !userData.displayName) {
      throw new BadRequestException(
        'Username, password and displayName are required',
      );
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    const newUser = await this.prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
    });
    return newUser;
  }

  async loginUser(
    userData: Prisma.UserCreateInput,
  ): Promise<{ user: User; accessToken: string }> {
    const user = await this.prisma.user.findUnique({
      where: { username: userData.username },
    });
    if (!user) {
      throw new NotFoundException('Username not found');
    }
    const isPasswordValid = await bcrypt.compare(
      userData.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const accessToken = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        displayName: user.displayName,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' },
    );

    return { user, accessToken };
  }
}
