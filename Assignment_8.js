// Asmi Purarkar

// Assignment 8

// ---->> 1st - Basic Async/Await for Data Fetching
// const axios = require('axios');
// async function fetchData() {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     return res.data;
// }
// fetchData()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.error('Error occurred while fetching data:', err);
//     });


//  ---->> 2nd - Handling Error with Async/Await
// const axios = require('axios'); 
// for (let d = 0; d <= 20; d++) { 
//     if (d % 2 == 0) { 
//         if (d == 0) {
//             continue; 
//         }
//         console.log(d); 
//     }
// }
// async function fetchData() {
//     try {
//         const res = await axios.get('https://invalidurl.typicode.com/posts');
//         console.log(res.data);
//     } catch (err) {
//         console.error('Error occurred while fetching data:', err.message);
//     }
// }
// fetchData();


// ---->> 3rd - Sequential Data Fetching with Async/Await
// const axios = require('axios'); 

// const API_1 = 'https://jsonplaceholder.typicode.com/posts';
// const API_2 = 'https://jsonplaceholder.typicode.com/users';

// async function fetchDataFromAPI1() {
//   return axios.get(API_1);
// }

// async function fetchDataFromAPI2() {
//   return axios.get(API_2);
// }

// (async () => {
//   fetchDataFromAPI1()
//     .then(res1 => {
//       console.log('Data from API_1:', res1.data);
//       return fetchDataFromAPI2();
//     })
//     .then(res2 => {
//       console.log('Data from API_2:', res2.data);
//     })
//     .catch(error => {
//       console.error('Error occurred while fetching data:', error.message);
//     });
// })();


// ---->> 4th - Parallel Data Fetching with Async/Await
// const axios = require('axios');                              
// const API_1 = 'https://jsonplaceholder.typicode.com/posts';  
// const API_2 = 'https://jsonplaceholder.typicode.com/users';  
// async function fetchDataFromAPI_1() {  
//   return axios.get(API_1);
// }
// async function fetchDataFromAPI_2() {  
//   return axios.get(API_2);
// }
// (async () => { Promise.all([fetchDataFromAPI_1(), fetchDataFromAPI_2()])
//     .then(([res1, res2]) => {
//       console.log('Data from API_1:', res1.data); 
//       console.log('Data from API_2:', res2.data); 
//       let object = [                        
//         { name: "John", age: 25 },
//         { name: "Jane", age: 30 },
//         { name: "Jim", age: 20 },
//         { name: "Jack", age: 35 },
//         { name: "Jacob", age: 35 }
//       ];
//       let array = [];  
//       for (let i in object) {  
//         let a = object[i].name;
//         array.push(a);  
//       }
//       console.log(array); 
//     })
//     .catch(error => {  
//       console.error('Error occurred while fetching data:', error.message);  
//     });
// })();


// ---->> 5th - Chaining Async Functions
// const axios = require('axios'); 
// const API_POSTS = 'https://jsonplaceholder.typicode.com/posts';
// const API_COMMENTS = 'https://jsonplaceholder.typicode.com/comments';
// async function fetchPosts() { 
//   const res = await axios.get(API_POSTS); 
//   return res.data; 
// }
// async function fetchComments() { 
//   const res = await axios.get(API_COMMENTS);
//   return res.data; 
// }
// async function fetchData() { 
//   const posts = await fetchPosts(); 
//   console.log('Posts:', posts); 
//   const comments = await fetchComments(); 
//   console.log('Comments:', comments);  
// }
// fetchData() 
//   .catch(error => {  
//     console.error('Error occurred while fetching data:', error.message); 
// });


