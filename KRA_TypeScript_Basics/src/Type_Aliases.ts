// Type Aliases allow defining types with a custom name (an Alias).
// It's flexible and can represent primitives, unions, tuples, and more.

type Car = {
  brand: string;
  year: number;
};

let carObj1: Car = {
  brand: "Tata",
  year: 2025,
};

console.log(carObj1);
console.log(carObj1.brand);
// console.log(Car); // 'Car' only refers to a type, but is being used as a value here.

type ID = string | number;
let apiId: ID = "ASDASSDS";
console.log(apiId);
