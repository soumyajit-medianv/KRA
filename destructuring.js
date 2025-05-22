// Destructuring is a feature in JavaScript (introduced in ES6) that allows you to unpack values from arrays or objects into separate variables in a more concise way.

// Array Destructuring
const number = [10, 20, 30];
const [a, b, c] = number;

console.log(a);
console.log(b);
console.log(c);

// Object Destructuring
const person = { name: "John", age: 25 };
const { name, age } = person;
console.log(name);
console.log(age);


// Nested Destructuring
// Array
let num = [1, [2, 3], 4];
let [d, [e, f], g] = num;

console.log(d, e, f, g);

// Object
const student = {
    std_name: "Alice",
    address: {
        city: "Dubai",
        zip: {
            code: 12345,
            plus: 6789
        }
    }
}

const {
    std_name,
    address: {
        city,
        zip: { code, plus }
    }
} = student;

console.log(std_name, city, code, plus);