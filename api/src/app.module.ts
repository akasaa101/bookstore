import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthorsController } from './authors/authors.controller';
import { AuthorsService } from './authors/authors.service'; // <-- add this import

@Module({
  imports: [
    AuthModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AppController, UserController, AuthorsController],
  providers: [AppService, UserService, PrismaService, AuthorsService], // <-- add AuthorService to providers
})
export class AppModule {}
