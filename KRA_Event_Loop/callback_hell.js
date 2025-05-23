// Callback hell happened when we use too many nested callbacks, making the code difficult to read and maintain. It usually occur in asynchronous programming. To aviod it we can use Promises or async/await for better code structure.

// function task1(callback) {
//     setTimeout(() => {
//         console.log("Task 1 completed");
//         callback();
//     }, 1000);
// }

// function task2(callback) {
//     setTimeout(() => {
//         console.log("Task 2 completed");
//         callback();
//     }, 1000);
// }

// function task3(callback) {
//     setTimeout(() => {
//         console.log("Task 3 completed");
//         callback();
//     }, 1000);
// }

// // Nested callback
// task1(function () {
//     task2(function () {
//         task3(function () {
//             console.log("All tasks completed.");
//         })
//     })
// })


// Solution
// To avoid callback hell, you can convert each function to return a Promise:

function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve();
        }, 1000);
    })
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve();
        }, 1000)
    })
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3 completed");
            resolve();
        }, 1000)
    })
}


// // Chaining Promises
// task1()
//     .then(() => task2())
//     .then(() => task3())
//     .then(() => console.log("All task completed."));


// Using async / await, the code becomes even more readable:
async function runTasks() {
    await task1();
    await task2();
    await task3();
    console.log("All task completed.");
}

runTasks();

