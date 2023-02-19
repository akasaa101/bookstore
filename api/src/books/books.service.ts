import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [];

  findAll(): Book[] {
    return this.books;
  }

  findById(id: number): Book {
    return this.books.find((book) => book.id === id);
  }

  create(bookData: Book): Book {
    const newBook = { ...bookData, id: this.books.length + 1 };
    this.books.push(newBook);
    return newBook;
  }

  update(id: number, bookData: Book): Book {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      return null;
    }
    const updatedBook = { ...this.books[bookIndex], ...bookData };
    this.books[bookIndex] = updatedBook;
    return updatedBook;
  }

  delete(id: number): void {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
    }
  }
}
