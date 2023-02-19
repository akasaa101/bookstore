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
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';

@Module({
  imports: [
    AuthModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [
    AppController,
    UserController,
    AuthorsController,
    BooksController,
  ],
  providers: [
    AppService,
    UserService,
    PrismaService,
    AuthorsService,
    BooksService,
  ], // <-- add AuthorService to providers
})
export class AppModule {}
