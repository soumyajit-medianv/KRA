// TypeScript is a syntactic superset of JavaScript which adds static typing.
// This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.


// ...........Why should I use TypeScript?...........
// JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.
// In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.
// TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.
// For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.


// ...........There are three main primitives in JavaScript and TypeScript...........
// boolean - true or false values
// number - whole numbers and floating point values
// string - text values like "TypeScript Rocks"
// There are also 2 less common primitives used in later versions of Javascript and TypeScript.
// bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
// symbol are used to create a globally unique identifier.

let str: string = "Hello World";
console.log(str);

let num: number = 15;
console.log(num);

// num = "Hello"; // Type 'string' is not assignable to type 'number'.

let bool: boolean = true;
console.log(bool);

let bignum: bigint = BigInt(5472131409918845);
console.log(bignum);

// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
// Most expect json to be an object, but it can be a string or a number like this example
const json1 = JSON.parse("55"); // JSON number
console.log(typeof json1);

const json2 = JSON.parse('"Hello"'); // JSON string
console.log(typeof json2);

const json3 = JSON.parse("true"); // JSON boolean
console.log(typeof json3);

const json4 = JSON.parse('{"name": "Soumyajit"}'); // JSON object
console.log(typeof json4);

