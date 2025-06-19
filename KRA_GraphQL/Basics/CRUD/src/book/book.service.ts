import { Injectable } from '@nestjs/common';
import { BookEntity } from './entities/book.entity';

@Injectable()
export class BookService {
    public booksData: BookEntity[] = [];

    addBook(book: BookEntity): string {
        this.booksData.push(book);
        return "Book added successfully";
    }

    updateBook(id: number, updateBook: BookEntity): string {
        for (let x = 0; x < this.booksData.length; x++) {
            if (this.booksData[x].id === id) {
                this.booksData[x] = updateBook;
            }
        }

        return "Book updated successfully";
    }

    deleteBook(id: number) {
        this.booksData = this.booksData.filter((book) => book.id !== id);
        return "Book has been deleted";
    }

    findBookById(id: number): BookEntity | string {
        for (let x = 0; x < this.booksData.length; x++) {
            if (this.booksData[x].id === id) {
                return this.booksData[x];
            }
        }

        return `Book with ${id} not exists.`;
    }

    findAllBooks(): BookEntity[] {
        return this.booksData;
    }

}
