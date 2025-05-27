// A generic interface lets you define a structure that can work with any type.
interface Box<T> {
  value: T;
}
// Here, Box<T> is a generic interface. T is a placeholder for a type.

const numberBox: Box<number> = { value: 5 };
const stringBox: Box<string> = { value: "Earth" };

console.log(numberBox.value);
console.log(stringBox);

// Generic Interface with an Object
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const userResponse: ApiResponse<{ name: string; roll_number: number }> = {
  data: { name: "Soumyajit Padhan", roll_number: 123 },
  success: true,
};

console.log(userResponse.data.name);

const productResponse: ApiResponse<string[]> = {
  data: ["Laptop", "Mouse"],
  success: true,
};

console.log(productResponse.data);
// ApiResponse<T> is flexible for any shape of data.

