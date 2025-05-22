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



// Inheritance:
// Inheritance in JavaScript allows a child class to inherit properties and methods from a parent class using the extends keyword. This promotes code reusability and better organization of the code.
// The super keyword is used inside a child class to call the parent class constructor or methods. Child classes can also override parent methods to modify their behavior.

class Animal {
    constructor(name) {
        this.name = name; // Property initialized in the parent class
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks!`); // Accessing inherited property
    }
}

let dog1 = new Dog("Buddy"); // Creates an instance with name "Buddy"
dog1.makeSound(); // Buddy makes a sound.
dog1.bark(); // Buddy barks!
console.log(dog1.name); // Buddy
// If a child class doesn't define a constructor, JavaScript automatically calls the parent’s constructor (Animal in this case).
// Dog inherits everything from Animal, so this.name = name; is set inside Animal's constructor.



// Polymorphism:
// Polymorphism is an OOP principle that allows the same method to behave differently based on the object that calls it. It helps in writing flexible and reusable code.
// In JavaScript, polymorphism is mainly achieved through method overriding.
class Fruit {
    describe() {
        console.log('This is a fruit');
    }
}

class Apple extends Fruit {
    describe() {
        console.log("This is an apple");
    }
}

class Banana extends Fruit {
    describe() {
        console.log("This is a banana");
    }
}

class Orange extends Fruit {
    describe() {
        console.log("This is an orange");
    }
}

let fruits = [new Fruit, new Apple, new Banana, new Orange];

fruits.forEach((fruit) => {
    fruit.describe();
})

// The method describe() is overridden in each fruit subclass.
// The same function describe behaves differently depending on which fruit object is passed.
// This is polymorphism — many forms of the same method.
