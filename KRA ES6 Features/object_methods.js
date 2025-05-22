let obj1 = { name: "Soumyajit", age: 22 };
console.log(obj1.name);

// The Object.assign() method copies properties from one or more source objects to a target object.
// Target Object
let person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
};

// Source Object
let person2 = { firstName: "Alice", lastName: "Smith" };

Object.assign(person1, person2);
console.log(person1);

// Object.entries() returns an array of the key/value pairs in an object:
console.log(Object.entries(person1));

// The fromEntries() method creates an object from a list of key/value pairs.
const fruits = [
    ["apple", 300],
    ["mango", 400],
    ["Banana", 500]
];

const myObj = Object.fromEntries(fruits);
console.log(myObj);

// The Object.keys() method returns an array with the keys of an object.
console.log(Object.keys(person1));

// The JavaScript for...in statement loops through the properties of an object.
for(let key in person1){
    console.log(person1[key]);
}


