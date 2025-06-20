import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';
import { Repository } from 'typeorm';
import { AddBookArgs } from './args/addbook.args';
import { UpdateBookArgs } from './args/updatebook.args';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity)
        private readonly bookRepo: Repository<BookEntity>
    ) { }


    async findAllBooks(): Promise<BookEntity[]> {
        let books = await this.bookRepo.find();
        return books;
    }

    async findBookById(id: number): Promise<BookEntity> {
        let book = await this.bookRepo.findOne({
            where: { id: id }
        });

        if (!book) {
            throw new NotFoundException(`Book with id ${id} not found`);
        }

        return book;
    }

    async deleteBook(id: number): Promise<string> {
        await this.bookRepo.delete(id);
        return "Book has been deleted";
    }

    async addBook(addBookArgs: AddBookArgs): Promise<string> {
        let book: BookEntity = new BookEntity();
        book.title = addBookArgs.title;
        book.price = addBookArgs.price;

        await this.bookRepo.save(book);

        return "Book has been successfully added";
    }

    async updateBook(updateBookArgs: UpdateBookArgs): Promise<string> {
        let book = await this.bookRepo.findOne({
            where: { id: updateBookArgs.id }
        });

        if (!book) {
            throw new NotFoundException(`Book with id ${updateBookArgs.id} not found`);
        }

        book.title = updateBookArgs.title;
        book.price = updateBookArgs.price;

        await this.bookRepo.save(book);

        return "Book has been successfully updated";
    }

    
}
