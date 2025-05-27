// A class in TypeScript is a blueprint to create objects with properties and methods. It adds strong typing and supports features like access modifiers, constructors, inheritance, and more.

class Point {
    x = 0;
    y = 0;
}

const pt = new Point();
console.log(pt.x);


class Greet {
    msg: string;

    constructor() {
        this.msg = "Hello";
    }
}

let g1 = new Greet();
console.log(g1.msg);


class Greeter {
    readonly name: string = "Earth";

    constructor(anotherName?: string) {
        if (anotherName !== undefined) {
            this.name = anotherName;
        }
    }
}

const g2 = new Greeter("Hello");
console.log(g2.name);
// g2.name = "world"; // Cannot assign to 'name' because it is a read-only property.



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const p1 = new Person("John", 25);
p1.greet();

