enum Genre {
    Fiction = "Fiction",
    NonFiction = "NonFiction",
    Mystery = "Mystery",
    Thriller = "Thriller",
    Fantasy = "Fantasy",
    ScienceFiction = "ScienceFiction",
    Romance = "Romance",
    Horror = "Horror",
    Biography = "Biography",
    History = "History",
    Poetry = "Poetry",
    SelfHelp = "SelfHelp",
    Adventure = "Adventure",
    Drama = "Drama",
    Classic = "Classic",
    Children = "Children",
    GraphicNovel = "GraphicNovel"
}

type BookFormat = "Paperback" | "Hardcover" | "Ebook";

interface Books {
    id: number,
    title: string,
    author: string,
    genre: Genre,
    quantity: number,
    format: BookFormat
}

interface Library {
    inventory: Books[];
    displayInventory(): void;
    searchBooks(keyword: string): Books[];
    updateQuantity(id: number, newQuantity: number): void;
}

class LibraryInventory implements Library {
    inventory: Books[];

    constructor() {
        this.inventory = [
            { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genre: Genre.Fantasy, quantity: 5, format: "Paperback" },
            { id: 2, title: "1984", author: "George Orwell", genre: Genre.ScienceFiction, quantity: 3, format: "Hardcover" },
            { id: 3, title: "The Da Vinci Code", author: "Dan Brown", genre: Genre.Mystery, quantity: 4, format: "Ebook" },
            { id: 4, title: "Pride and Prejudice", author: "Jane Austen", genre: Genre.Romance, quantity: 6, format: "Paperback" },
            { id: 5, title: "The Shining", author: "Stephen King", genre: Genre.Horror, quantity: 2, format: "Hardcover" },
            { id: 6, title: "Steve Jobs", author: "Walter Isaacson", genre: Genre.Biography, quantity: 3, format: "Ebook" },
            { id: 7, title: "The Adventures of Tom Sawyer", author: "Mark Twain", genre: Genre.Classic, quantity: 4, format: "Paperback" },
            { id: 8, title: "Charlotte's Web", author: "E.B. White", genre: Genre.Children, quantity: 5, format: "Ebook" },
            { id: 9, title: "The Odyssey", author: "Homer", genre: Genre.Poetry, quantity: 2, format: "Hardcover" },
            { id: 10, title: "Into the Wild", author: "Jon Krakauer", genre: Genre.NonFiction, quantity: 3, format: "Paperback" },
            { id: 11, title: "The Alchemist", author: "Paulo Coelho", genre: Genre.Fiction, quantity: 6, format: "Hardcover" },
            { id: 12, title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", genre: Genre.Fantasy, quantity: 7, format: "Ebook" }
        ];
    }

    displayInventory(): void {
        console.log("LIBRARY INVENTORY");

        this.inventory.forEach((book => {
            console.log(`${book.id}: ${book.title} by ${book.author} -  Genre: ${book.genre} (${book.format}) - Copies: ${book.quantity}`);
        }))
    }

    searchBooks(keyword: string): Books[] {
        return this.inventory.filter(book =>
            book.title.toLowerCase().includes(keyword.toLowerCase()) ||
            book.author.toLowerCase().includes(keyword.toLowerCase()) ||
            book.genre.toLowerCase().includes(keyword.toLowerCase())
        );
    }

    updateQuantity(id: number, newQuantity: number): void {
        const book = this.inventory.find(book => book.id === id);
        if (book) {
            book.quantity = newQuantity;
            console.log(`Updated quantity of ${book.title} to ${newQuantity}`);
        }
        else {
            console.log("Book not found. Give the correct id.");
        }
    }
}

const myLibrary = new LibraryInventory();
myLibrary.displayInventory();
console.log(myLibrary.searchBooks("The Odyssey"));
myLibrary.updateQuantity(9, 10);
myLibrary.displayInventory();
