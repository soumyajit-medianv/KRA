// Array Methods
const arr = [1, 2, 3];
console.log(arr); // [ 1, 2, 3 ]

// Push
arr.push(4);
console.log(arr); // [ 1, 2, 3, 4 ]

// Pop
arr.pop();
console.log(arr); // [ 1, 2, 3 ]

// Shift
arr.shift();
console.log(arr); // [ 2, 3 ]

// IndexOf
console.log(arr.indexOf(3)); // 1

// LastIndexOf
console.log(arr.lastIndexOf(2)); // 0

// slice
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sliceArr = num.slice(1, 4);
console.log(sliceArr); // [ 2, 3, 4 ]

// splice
let num1 = [10, 20, 30, 40, 50];
// Remove elements
let removeElement = num1.splice(2, 2);
console.log(removeElement); // [ 30, 40 ] - Splice change the original array
// Add new elements
num1.splice(1, 0, 'a', 'b');
console.log(num1);



// Higher Order Function
// map() -  Double the array element using map
let numbers = [1, 2, 3, 4, 5];
let double = numbers.map((ele) => ele * 2);
console.log(double); // [ 2, 4, 6, 8, 10 ]

// filter() - Filter the age which is greater than 18
let age = [4, 5, 8, 9, 12, 25, 29, 31, 24, 15, 18];
let filterAge = age.filter((ele) => ele > 18);
console.log(filterAge); // [ 25, 29, 31, 24 ]

// reduce() -  Reduce the array element into single element - (sum of the array element)
let arr1 = [1, 2, 3, 4, 5];
let sum = arr1.reduce((acc, val) => acc + val, 0);
console.log(sum); // 15

// forEach() - Iterate over the array
let arr2 = [1, 2, 3];
arr2.forEach((num) => console.log(num));

// find() - The find() method returns the value of the first element that passes a test and it executes a function for each array element.
let arr3 = [3, 10, 18, 15, 20];

function checkArr(age) {
    return age > 18;
}

console.log(arr3.find(checkArr)); // 20


