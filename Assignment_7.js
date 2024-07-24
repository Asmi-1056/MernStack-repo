// Asmi Purarkar

// Assignment 7

//----->> 1st Basic File Handling
// const fs = require('fs');              
// // Writing to the file
// fs.writeFile('notes.txt', 'Hello', (err) => {
//   if (err) throw err;
//   console.log('File "notes.txt" has been created and initial content has been written.');

//   // Reading from the file
//   fs.readFile('notes.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('Content of "notes.txt":');
//     console.log(data);

//     // Appending additional text to the file
//     fs.appendFile('notes.txt', ' World', (err) => {
//       if (err) throw err;
//       console.log('Additional text has been appended to "notes.txt".');

//       // Deleting the file
//       fs.unlink('notes.txt', (err) => {
//         if (err) throw err;
//         console.log('File "notes.txt" has been deleted.');
//       });
//     });
//   });
// });


//----->> 2nd Synchronous vs Asynchronous File Handling
// const fs = require('fs');
// const largeString = new Array(1000000).fill('Hello World! ').join('');

// const startSyncWrite = Date.now();
// fs.writeFileSync('largefile.txt', largeString);
// const endSyncWrite = Date.now();
// console.log(`Synchronous file writing took ${endSyncWrite - startSyncWrite}ms`);

// const startSyncRead = Date.now();
// const fileContent = fs.readFileSync('largefile.txt', 'utf8');
// const endSyncRead = Date.now();
// console.log(`Synchronous file reading took ${endSyncRead - startSyncRead}ms`);

// const startAsyncWrite = Date.now();
// fs.writeFile('largefile.txt', largeString, (err) => {
// if (err) {
// console.error(err);
// } else {
// const endAsyncWrite = Date.now();
// console.log(`Asynchronous file writing took ${endAsyncWrite - startAsyncWrite}ms`);
// }
// });

// const startAsyncRead = Date.now();
// fs.readFile('largefile.txt', 'utf8', (err, data) => {
// if (err) {
// console.error(err);
// } else {
// const endAsyncRead = Date.now();
// console.log(`Asynchronous file reading took ${endAsyncRead - startAsyncRead}ms`);
// }
// });


//----->> 3rd Callback Functions
// function doTask(callback) {
//     console.log("Task is started");
    
//     setTimeout(() => {
//         console.log("Task is completed");
//         callback(); 
//     }, 2000);
// }

// function callbackFunction() {
//     console.log("Callback is executed");
// }

// doTask(callbackFunction);


//----->> 4th Nested Callbacks (Callback Hell) 
// function task1(callback) {
//     setTimeout(() => {
//         console.log('Task 1 is completed');
//         if (callback) callback();
//     }, 1000);
// }

// function task2(callback) {
//     setTimeout(() => {
//         console.log('Task 2 is completed');
//         if (callback) callback();
//     }, 2000);
// }

// function task3(callback) {
//     setTimeout(() => {
//         console.log('Task 3 is completed');
//         if (callback) callback();
//     }, 3000);
// }

// task1(() => {
//     task2(() => {
//         task3(() => {
//             console.log('All tasks are completed');
//         });
//     });
// });


//----->> 5th Using Promises to Avoid Callback Hell
// function task1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Task 1 is completed');
//             resolve(); 
//         }, 1000);
//     })
// }
// function task2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Task 2 is completed');
//             resolve(); 
//         }, 2000); 
//     });
// }
// function task3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Task 3 is completed');
//             resolve(); 
//         }, 3000); 
//     });
// }
// task1().then(() => {
//     return task2(); 
// }).then(() => {
//     return task3(); 
// }).then(() => {
//     console.log('All tasks are completed'); 
// }).catch((error) => {
//     console.error('Error has occurred:', error); 
// });
