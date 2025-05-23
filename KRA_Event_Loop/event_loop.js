// The Event Loop is a mechanism in JavaScript that allows it to handle asynchronous operations like setTimeout, fetch, or event listeners without blocking the main thread.
// JavaScript is single-threaded, which means it can execute only one piece of code at a time. However, thanks to the event loop, JavaScript can still manage async tasks in the background while continuing with other code.

// Call Stack - Where function calls are added and removed (LIFO).
// Web APIs - Browser-provided tools like setTimeout, fetch, etc.
// Callback Queue - Holds callback functions ready to be executed.
// Microtask Queue - Holds promises (.then, catch, finally) and mutation observers.
// Event Loop - Checks if the call stack is empty, and if so, pushes callbacks from the queue.

//  How the Event Loop Works
// Synchronous tasks go to the call stack and are executed immediately.
// Asynchronous tasks (like setTimeout, fetch, or Promises):
//      Get sent to Web APIs.
//      Once complete, their callback is pushed to a queue (callback or microtask).
// The event loop constantly checks:
//      If the call stack is empty,
//      It moves the first callback from the queue into the call stack and executes it.


// This is how JavaScript handles async code efficiently, without blocking the execution of other code — even though it's single-threaded.


// Example:
console.log("Start");

setTimeout(() => {
    console.log("Timeout")
}, 2000);

Promise.resolve().then(() => {
    console.log("Promise");
})

console.log("End");

// Explanation:
// Start and End are synchronous → run first.
// Promise is a microtask → runs after stack is clear.
// setTimeout is a callback task → runs after microtasks.

