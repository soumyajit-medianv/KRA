// A callback function is a function that is passed as an argument to another function and gets invoked inside that function to complete some action.
// Callbacks are primarily used for: asynchronous operations, event handling.

// Example
// Synchronous callback
function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function sayGoodBye() {
    console.log("Goodbye");
}

greet("Soumyajit", sayGoodBye);
// Explanation:
// greet(name, callback) is called 
// It log: "Hello Soumyajit" (synchronous)
// immediately called the callback that log: "Goodbye"


// Asynchronous callback
function fetchData(name, callback1, callback2) {
    console.log("Fetching data from", name);
    setTimeout(() => {
        console.log("Data fetch from server...");
        callback1(callback2);
    }, 2000);
}

function processData(callback) {
    console.log("Processing...");
    setTimeout(() => {
        callback();
    }, 2000)
}

function success() {
    console.log("Done")
}

fetchData("JSON Placeholder", processData, success);


// Step-by-Step Execution & Event Loop Explanation:

// fetchData("JSON Placeholder", processData, success) is called
// It logs: "Fetching data from JSON Placeholder" (synchronous)

// setTimeout(..., 2000) inside fetchData is registered
// This goes to the Web API environment, waits 2 seconds.

// After 2 seconds, the callback inside setTimeout (the one that logs "Data fetch...") is moved to the task queue
// When the call stack is empty, this task is pushed to the call stack.

// That task executes:
// Logs: "Data fetch from server...".

// Then calls: processData(success).
// processData logs: "Processing..." (synchronous)
// Another setTimeout(..., 2000) is scheduled
// Waits 2 seconds, then pushes the success() call to the task queue.

// After another 2 seconds:
// Logs: "Done" (from success())



// JS Code
//            ↓
// Calls setTimeout
//            ↓
// Browser Web API handles timer
//            ↓
// After 2 sec → Sends callback to Task Queue
//            ↓
// Event Loop picks it when stack is free
//            ↓
// Executes callback
