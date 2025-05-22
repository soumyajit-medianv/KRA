// Rest Parameter (...)
// The rest parameter is used in function definitions to collect multiple arguments into a single array.
// It helps when you don’t know the exact number of arguments a function will receive.

function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5));


// Spread Operator (...)
// The spread operator expands an array, object, or string into individual elements.
// It is useful for copying arrays, combining arrays/objects, and passing multiple values to functions.

// Passing multiple values to functions
function add(a, b, c) {
    return a + b + c;
}

let num = [10, 20, 30];
console.log(add(...num));

// Merging arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged);

// Merging objects
let obj1 = { name: "Soumya", roll: 123 };
let obj2 = { friend: "Rahul" };
let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);