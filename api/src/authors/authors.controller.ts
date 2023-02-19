import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorService: AuthorsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllAuthors() {
    return this.authorService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createAuthor(@Body() authorData: { name: string }) {
    return this.authorService.create(authorData.name);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateAuthor(
    @Param('id') id: string,
    @Body() authorData: { name: string },
  ) {
    return this.authorService.update(parseInt(id, 10), authorData.name);
  }
}
