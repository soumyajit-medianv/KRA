import { Query, Resolver } from "@nestjs/graphql";

@Resolver("Book") // creating resolver for the Book schema
export class BookResolver {

    @Query("books")
    getAllBooks() {
        // return books
        return [
            { id: 1, title: "Book 1", price: 100 },
            { id: 2, title: "Book 2", price: 200 },
            { id: 3, title: "Book 3", price: 300 },
        ]
    }
}

