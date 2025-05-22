// A Promise is an object in JavaScript that represents an asynchronous operation that may succeed or fail. It has three states: pending, fulfilled, and rejected. We handle promises using .then(), .catch(), and .finally(), or the modern async/await syntax for better readability. It helps avoid callback hell and makes asynchronous programming cleaner.


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let success = true;  // Change to false to test rejection
//         if (success) {
//             resolve("Task completed successfully!");
//         } else {
//             reject("Task failed!");
//         }
//     }, 2000);
// });

// // myPromise
// //     .then((result) => console.log(result))  // If resolved
// //     .catch((error) => console.log(error))  // If rejected
// //     .finally(() => console.log("Operation finished"));


// // Using async and await
// async function handlePromise() {
//     try {
//         let result = await myPromise; // Waiting for the promise to resolve or reject
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log("Operation finished");
//     }
// }

// handlePromise();


// // // If you define an async function that returns a Promise, you must call it explicitly:
// // function getPromise() {
// //     return new Promise((resolve) => {
// //         setTimeout(() => resolve("Done!"), 2000);
// //     });
// // }

// // async function handlePromise() {
// //     let result = await getPromise(); // Here, we call getPromise()
// //     console.log(result);
// // }

// // handlePromise(); // Call the function

// Promise Handling Methods

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 1 done");
    }, 1000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 2 done");
    }, 2000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Task 3 done");
        reject("Task 3 failed!");
    }, 500);
})


// // Promise.all() – Runs Multiple Promises in Parallel
// // Promise.all() takes an array of promises, runs them simultaneously, and waits for all to be fulfilled.
// // If all promises resolve, it returns an array of resolved values.
// // If any promise rejects, it immediately rejects with that error.
// Promise.all([p1, p2, p3])
//     .then((result) => console.log(result)) // Won't run if any fails
//     .catch((error) => console.log(error)) // Output: Task 3 failed!


// // Promise.allSettled() – Waits for All Promises (No Failure Impact)
// // Promise.allSettled() is a method that runs multiple promises in parallel and waits for all of them to settle (either fulfilled or rejected).
// // Unlike Promise.all(), it does not fail if one promise rejects. Instead, it returns an array of objects showing the status (fulfilled or rejected) of each promise.
// Promise.allSettled([p1, p2, p3])
//     .then((result) => console.log(result));


// // Promise.race() – First Completed Wins
// // Promise.race() runs multiple promises in parallel and returns the result of the first one to settle (whether resolved or rejected).
// Promise.race([p1, p2, p3])
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));


// Promise.any() – First Successful Wins
// Promise.any() runs multiple promises in parallel and returns the first fulfilled (resolved) promise.
// Ignores rejected promises and waits for the first successful one.
// If all promises reject, it throws an AggregateError.
Promise.any([p1, p2, p3])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
