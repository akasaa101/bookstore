import { Injectable, BadRequestException } from '@nestjs/common';
import { Author } from '@prisma/client';

@Injectable()
export class AuthorsService {
  private readonly authors: Author[] = [];

  findAll(): Author[] {
    return this.authors;
  }

  create(name: string): Author {
    if (!name) {
      throw new BadRequestException('name is required');
    }
    const id = this.authors.length + 1;
    const newAuthor: Author = { id, name };
    this.authors.push(newAuthor);
    return newAuthor;
  }

  update(id: number, name: string): Author {
    if (!name) {
      throw new BadRequestException('name is required');
    }
    const author = this.authors.find((author) => author.id === id);
    if (!author) {
      throw new Error(`Author with ID ${id} not found`);
    }
    author.name = name;
    return author;
  }
}
