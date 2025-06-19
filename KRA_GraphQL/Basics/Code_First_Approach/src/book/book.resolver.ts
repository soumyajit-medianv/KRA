import { Query, Resolver } from "@nestjs/graphql";
import { Book } from "./book.schema";
import { Book as BookModel } from "../graphql"

@Resolver(of => Book)
export class BookResolver {

    // @Query(returns => [Book], { name: "books" }) // {name: "books"} => Change the query name in schema otherwise it take the name from the methods i.e getAllBooks
    @Query(returns => [Book])
    getAllBooks() {
        // Using interface that automatically generated that follow the schema structure
        let arr: BookModel[] = [
            { id: 1, title: "Book 1", price: 100 },
            { id: 2, title: "Book 2", price: 200 },
            { id: 3, title: "Book 3", price: 300 },
        ];

        return arr;
    }

    // @Query(returns => [Book])
    // getAllBooks() {
    //     return [
    //         { id: 1, title: "Book 1", price: 100 },
    //         { id: 2, title: "Book 2", price: 200 },
    //         { id: 3, title: "Book 3", price: 300 },
    //     ]
    // }
}