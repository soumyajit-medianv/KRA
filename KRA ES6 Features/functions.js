// Normal Funciton
// Normal functions are better for object methods, constructors, and cases where this or arguments is needed.
function normalFunction() {
    console.log("Hi, my name is Soumyajit Padhan");
}

normalFunction();

// Normal functions require an explicit return statement.
function normalFunction2(a, b) {
    return a + b;
}

console.log(normalFunction2(4, 4));

// Arrow Function
// Arrow functions provide a shorter syntax for writing functions in JavaScript. Arrow functions are best suited for short functions, callbacks, and functional programming. Arrow functions do not have their own this. instead they inherit this from the surrounding lexical scope.
const arrowFunction = () => {
    console.log("Hi, my name is Soumyajit Padhan");
}

arrowFunction();

// Arrow functions also allow implicit return when written as a one-liner without curly braces
const fn1 = () => 5 + 6;
console.log(fn1());

const fn2 = (a, b) => a * b;
console.log(fn2(5, 5));

// Default parameters
// Default parameters allow you to set default values for function parameters if no value is provided or if undefined is passed.
function greet(name = "Guest") {
    console.log("Hello", name);
}

greet("Soumyajit"); // Hello Soumyajit
greet(); // Hello Guest