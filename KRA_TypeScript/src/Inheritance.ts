// Inheritance allows one class (called a child or subclass) to inherit properties and methods from another class (called a parent or superclass).
// This helps in code reusability and follows the Object-Oriented Programming principle.

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name); // Call parent constructor
        this.breed = breed;
    }

    bark(): void {
        // super.makeSound(); // Call the parent class method
        console.log(`${this.name} bark. Breed: ${this.breed}`);
    }
}

const myDog = new Dog("Puppy", "Labrador");
myDog.makeSound(); // From parent class
myDog.bark(); // From child class




