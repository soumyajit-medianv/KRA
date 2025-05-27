// A generic class allows us to define a class that can work with any type — just like a generic interface.

class Container<T> {
    content: T;

    constructor(value: T) {
        this.content = value;
    }

    getContent(): T {
        return this.content;
    }
}

// Here T is a generic type parameter. The class can store any type of content, and methods will return that same type.
const numberCont = new Container<number>(15);
console.log(numberCont.getContent());

const stringCont = new Container<string>("Hello Earth");
console.log(stringCont.getContent());

console.log(stringCont.content);

const objCont = new Container<{ name: string; age: number }>({
    name: "John",
    age: 25,
});
console.log(objCont.getContent());

// Normal Class vs Generic Class in TypeScript

// Normal Class
// Works with a specific (fixed) data type.
// Example: A StringBox class that only works with string values.
// To handle another type (like number), you would need to create a new class.
// Less flexible and can lead to repetitive code.
// Type safety is limited to only that one data type.

// Generic Class
// Uses type parameters (e.g., <T>) to make the class work with any data type.
// You define the class once and specify the type when creating objects.
// Promotes code reusability – no need to rewrite the same logic for different types.
// Offers strong type safety and clean, scalable code.
// Ideal for utility classes, wrappers, services, or containers that deal with various types.
