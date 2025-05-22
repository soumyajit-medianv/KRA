// Object-Oriented Programming (OOPs) is a programming paradigm that organizes code into objects, which contain both properties and methods. It follows four key principles: Encapsulation, Abstraction, Inheritance, and Polymorphism, making code more modular, reusable, and easier to maintain.

// Encapsulation:
// Encapsulation is the concept of restricting direct access to an object's properties and allowing modifications only through controlled methods. It helps protect data and ensures data integrity.
class BankAccount {
    #balance; // Private property
    constructor(amount) {
        this.#balance = amount;
    }

    getBalance() {
        return this.#balance; // Access through a method
    }
}

let account1 = new BankAccount(5000);
console.log(account1.getBalance());// 5000
// console.log(account1.#balance); // Error: Private field cannot be accessed


// Abstraction
// Abstraction is the concept of hiding implementation details from the user and exposing only the essential features. This improves code maintainability, security, and usability by preventing direct access to complex logic.
class Phone {
    #brand; // Private field
    #model;

    constructor(brand, model) {
        this.#brand = brand;
        this.#model = model;
    }

    // Public method (only exposes necessary details)
    call() {
        console.log(`Calling from ${this.#brand} ${this.#model}`);
    }

}

let phone1 = new Phone("Samsung", "Galaxy S24");
phone1.call(); // Calling from Samsung Galaxy S24   

// Trying to access private properties
// console.log(phone1.#brand); // Error: Private field cannot be accessed

// Hides implementation details (brand and model are private).
// The user can’t modify internal properties directly.
// The user interacts only through public methods (call()).

