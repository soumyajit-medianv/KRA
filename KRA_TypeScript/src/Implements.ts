// We can use an implements clause to check that a class satisfies a particular interface. An error will be issued if a class fails to correctly implement it.

interface Person {
    name: string;
    age: number;
    greet(): void;
}

class Student implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}


const student1 = new Student("Alice", 26);
student1.greet();

// Why use implements?
// Ensures the class follows the structure defined in the interface.
// Makes code more predictable and readable.
// Helps with code contracts in large teams or codebases.

