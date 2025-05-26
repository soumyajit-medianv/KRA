// any is a type that disables type checking and effectively allows all types to be used.
let anyType: any = true;
console.log(anyType);
anyType = "Earth";
console.log(anyType);

// unknown is a similar, but safer alternative to any.
// TypeScript will prevent unknown types from being used.
let unknownType: unknown = 14;
console.log(unknownType);
console.log(typeof unknownType);
unknownType = "Earth";
console.log(unknownType);
console.log(typeof unknownType);

// // never effectively throws an error whenever it is defined
// let x: never = true;

// // undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
let a: undefined = undefined;
console.log(typeof a);
let b: null = null;
console.log(typeof b);
