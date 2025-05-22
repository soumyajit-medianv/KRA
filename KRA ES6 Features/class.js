// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     }

// }

// const person1 = new Person("Alice", 25);
// person1.greet();
// // console.log(Person.prototype.greet);



// // Static Methods in JavaScript Classes
// class MathHelper {
//     static add(a, b) {
//         return a + b;
//     }
// }

// // // Cannot call it on an instance
// // const obj = new MathHelper();
// // console.log(obj.add(5, 10)); // Error: obj.add is not a function

// // Call static method directly on the class
// console.log(MathHelper.add(5, 10));



// // Getters and Setters (get and set) in JavaScript Classes
// class Person {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }

//     // Getter for name
//     get name() {
//         return this._name;
//     }

//     set name(newName) {
//         if (newName.length < 3) {
//             console.log("Name should be at least 3 characters long.");
//             return;
//         }
//         this._name = newName;
//     }
// }

// const person1 = new Person("John", 25);

// // Using getter
// console.log(person1.name);

// // Using setter
// person1.name = "AI"; // Output: Name should be at least 3 characters long.
// person1.name = "Alice";
// console.log(person1.name); // Output: Alice

// // person.name automatically calls get name().
// // person.name = "Alice" automatically calls set name(newName).
// // JavaScript treats name as a single property with a getter and setter.



// // Inheritance
// // Parent class
// class Animal {
//     constructor(name) {
//         this.name = name; // Setting the name in the parent class
//     }

//     makeSound() {
//         console.log("Some generic sound.");
//     }
// }

// // Child class
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // Calls the parent constructor (Animal) and sets `this.name`
//         this.breed = breed; // Only handling child-specific property
//     }

//     // Method overriding
//     makeSound() {
//         super.makeSound(); // Calls the parent method
//         console.log("Bark! Bark!");
//     }

//     getDetails() {
//         console.log(`Name: ${this.name}, Breed: ${this.breed}`);
//     }
// }


// const myDog = new Dog("Buddy", "Labrador");

// myDog.makeSound();
// // "Some generic sound" (From parent)
// // "Bark! Bark!" (Overridden method)

// myDog.getDetails();
// // Name: Buddy, Breed: Labrador (Inherited & child class properties)

// console.log(myDog.name); // "Buddy" (From parent class)
// console.log(myDog.breed); // "Labrador" (From child class)


// // What happens if we don't use super() in the child constructor?

// // If we don't use super() in the child constructor, JavaScript will throw a ReferenceError because the child class must call the parent constructor before using this.
// // In JavaScript, when a class extends another class, the child class inherits from the parent. The parent constructor must be initialized first before using this in the child class.

// // Since the child class doesn't automatically call the parent constructor, you must explicitly call super().



// Private Fields (#):
class Person {
    age = 25;  // Public field (without let/const)
    #name;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return `My name is ${this.#name} and I am ${this.age} years old.`;
    }
}


const person1 = new Person("Alice");
console.log(person1.getName());

// console.log(person1.#name); // ERROR: Private field is not accessible
console.log(person1.age);
