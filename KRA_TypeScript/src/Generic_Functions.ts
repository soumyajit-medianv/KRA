// Generic functions allow us to write reusable, type-safe code that works with multiple data types, without sacrificing type checking.
function identity<T>(value: T): T {
  return value;
}

console.log(identity("Hello"));
console.log(identity(45));

function gFn<Type>(arr: Type[]): Type {
  return arr[1];
}

const n = [1, 2, 3, 4, 5];
console.log(gFn(n));
const s = ["a", "b", "c"];
console.log(gFn(s));

// Generic Function for Adding Two Numbers
function addition<T extends number>(num1: T, num2: T): T {
  return (num1 + num2) as T;
}
// T extends number tells TypeScript: Only allow types that are number or compatible with number.
// We use as T to assert the return type because TypeScript can't infer that num1 + num2 is still of type T.

console.log(addition(4, 5));

// .....Type Constraints.....
// This is a generic function with a type constraint. It means we can pass any type into this function as long as it has a length property of type number.

// Why We Use extends
// T extends { length: number } means:
// T must be an object that has a length property.
// That property must be a number.

// Ex - Imagine you want a function that logs the length of anything — a string, array, or object with a length property.
function logLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

logLength("Hello");
logLength([1, 2, 3]);
logLength({ length: 10 });

// .....Preserving Input Type.....
// When you use generic functions, TypeScript remembers the exact type you passed in — and makes sure the output stays the same type.
// So instead of just returning any, it returns the specific type you gave it.
function preservingType<T>(value: T): T {
  return value;
}

let result = preservingType("medianv");
console.log(typeof result);
let result1 = preservingType(5);
console.log(typeof result1);
