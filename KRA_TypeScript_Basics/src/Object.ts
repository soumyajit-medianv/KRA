// TypeScript has a specific syntax for typing objects.

const car: { brand: string; model: string; year: number } = {
  brand: "Toyata",
  model: "Fortuner",
  year: 2025,
};

console.log(car);

const bike = { brand: "Hero" };
console.log(bike);
bike.brand = "Yamaha";
// bike.brand = 5; // Type 'number' is not assignable to type 'string'.
console.log(bike);

// Optional properties are properties that don't have to be defined in the object definition.
const truck: { brand: string; mileage?: number } = {
  brand: "Tata",
};

console.log(truck);

// Index signatures can be used for objects without a defined list of properties.
// Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.
// In those cases you can use an index signature to describe the types of possible values.
const nameAge: { [index: string]: number } = {};
nameAge.soumyajit = 22;
// nameAge.rahul = "25"; // Type 'string' is not assignable to type 'number'.
console.log(nameAge);
