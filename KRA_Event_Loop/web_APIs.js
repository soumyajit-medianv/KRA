// setTimeout
// setTimeout is used to execute a function once after a specified dealy.(in miliseconds)
// It is commonly used for dealy execution.

// setTimeout(() => {
//     console.log("This is run after 3 seconds");
// }, 3000)


// setInterval
// setInterval is used to execute a function repeatedly at a fixed time interval.
// The function keeps running until it is manually stopped using clearInterval().

let count = 1;
let intervalId = setInterval(() => {

    console.log(`Execution ${count}`);

    if (count === 3) {
        clearInterval(intervalId);
    }

    count++;
}, 2000);

// fetch
// fetch() is a built-in function in JavaScript used to make HTTP requests. It is part of the Fetch API and provides a modern, promise-based way to interact with APIs.

// Example - Practical Examples Folder
