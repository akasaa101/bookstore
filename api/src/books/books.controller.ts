import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createBook(@Body() bookData: Book): Promise<Book> {
    if (!bookData.title) {
      throw new BadRequestException('Title is required');
    }
    if (!bookData.authorId) {
      throw new BadRequestException('Author is required');
    }
    return this.bookService.create(bookData);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateBook(
    @Param('id') id: string,
    @Body() bookData: Book,
  ): Promise<Book> {
    if (!bookData.title && !bookData.authorId) {
      throw new BadRequestException('Title and author are required');
    }
    return this.bookService.update(parseInt(id, 10), bookData);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteBook(@Param('id') id: string): Promise<void> {
    return this.bookService.delete(parseInt(id, 10));
  }
}
