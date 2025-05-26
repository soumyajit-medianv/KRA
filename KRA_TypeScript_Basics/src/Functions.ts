// A function is a block of code that perform a particular task.
// A function is executed when "something" invokes it (calls it).
// TypeScript has a specific syntax for typing function parameters and return values.

// Return Type
// The type of the value returned by the function can be explicitly defined.
function getCurrentTimestamp(): number {
  return new Date().getTime();
}

console.log(getCurrentTimestamp());

// Void Return Type
// The type void can be used to indicate a function doesn't return any value.
function printHello(): void {
  console.log("Hello");
}

printHello();

// Parameters
// Function parameters are typed with a similar syntax as variable declarations.
function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(4, 3));

// Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
function add(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}

console.log(add(6, 4));
console.log(add(4, 5, 6));

// Default Parameters
// For parameters with default values, the default value goes after the type annotation
function pow(value: number, exponent: number = 2): number {
  return value ** exponent;
}

console.log(pow(5));
console.log(pow(5, 3));

// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}

console.log(divide({ dividend: 10, divisor: 2 }));
// console.log(divide(10, 2)); // Expected 1 arguments, but got 2.
// console.log(divide(10)); // Argument of type 'number' is not assignable to parameter of type '{ dividend: number; divisor: number; }
// console.log(divide({ dividend: 10 })); // Property 'divisor' is missing in type '{ dividend: number; }' but required in type '{ dividend: number; divisor: number; }'.

// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function sum(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((a, e) => a + e, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// Type Alias
// Function types can be specified separately from functions with type aliases.
// These types are written similarly to arrow functions.

type Sub = (value: number) => number;

const subFn: Sub = (value) => value * 5;

console.log(subFn(10));

