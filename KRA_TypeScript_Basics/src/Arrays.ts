const strArr: string[] = ["Hello", "World", "Earth"];
console.log(strArr);
strArr.push("Ground");
console.log(strArr);
// strArr.push(5); // Argument of type 'number' is not assignable to parameter of type 'string'

// The readonly keyword can prevent arrays from being changed.
const strArr1: readonly string[] = ["Sky"];
// strArr1.push("green"); // Property 'push' does not exist on type 'readonly string[]'

const num1 = [1, 2, 3, 4, 5]; // // inferred to type number[]
console.log(num1);
num1.push(6);
console.log(num1);
// num.push("6"); // Argument of type 'string' is not assignable to parameter of type 'number'

let arr1: (string | number)[] = [1, 2, 3, "4", "5"];
console.log(arr1);

for (let i: number = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

