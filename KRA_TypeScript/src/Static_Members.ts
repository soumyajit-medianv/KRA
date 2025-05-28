// // In TypeScript a static method or property belongs to the class itself, not to the instances (objects) of the class. We call it on the class, not on an object.

// class Counter {
//     static count: number = 0;

//     static increment(): void {
//         Counter.count++;
//         // OR
//         // this.count++;
//     }

//     // Inside non-static methods, you cannot access static properties using this. You must use the class name.
//     decrement(): void {
//         // this.count--; // Property 'count' does not exist on type 'Counter'.
//         Counter.count--;
//     }
// }

// console.log(Counter.count);
// Counter.increment();
// Counter.increment();
// Counter.increment();
// console.log(Counter.count);

// const c = new Counter();
// // c.increment(); // Error: static methods can't be called on instance
// c.decrement();
// console.log(Counter.count);



// Question:
class MyClass {
    name = "MyClass";

    getName() {
        return this.name;
    }
}

const m = new MyClass();
const obj = {
    name: "obj",
    getName: m.getName,
};

console.log(obj.getName());
// The value of this inside a function depends on how the function was called. In this example, because the function was called through the obj reference, its value of this was obj rather than the class instance.

