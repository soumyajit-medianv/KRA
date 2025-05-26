// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.

let myTuple: [number, string, boolean] = [5, "Hello", true];
console.log(myTuple);
// myTuple = [5, "Hello", true, 45]; // Type '[number, string, true, number]' is not assignable to type '[number, string, boolean]'. Source has 4 element(s) but target allows only 3.
// myTuple = ["Hy", 4, false]; // Error: Type 'string' is not assignable to type 'number'. Type 'number' is not assignable to type 'string'

let myTuple1: readonly [number, boolean, string] = [6, false, "Hello"];

const graph: [x: number, y: number] = [12, 24];
console.log(graph);

// Destructuring Tuples
const [x, y] = graph;
console.log(x);
console.log(y);
