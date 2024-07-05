// Asmi Purarkar

// Assignment 3

// ---->> 1st - Write a JavaScript function that takes an array of strings and returns a new array with each string capitalized.
let words=['apple','banana','cherry','mango','peach']          //Created a array named as words
words=words.map(word=>word.charAt(0).toUpperCase()+word.slice(1))
    //map method is used to traverse each element at different indexes in array
    //charAt method is used to access the particular thing at specified index
    //toUpperCase method is used to capitalized word
    //slice method is used to slice first element
console.log(words)      //Prints the array with first letter capital of each word 


// ---->> 2nd - Create a function that returns the second largest element in an array.
let Arr = [3, 1, 4, 2, 5];               //Created an array named as Arr
function Second_Largest(Arr) {           //Created a function Second_Largest with parameter Arr
    let lar = Arr[0];                    //Stores 1 element of Arr in lar
    let sec_lar = 0;                     //Initialize sec_lar with 0
    for (let num of Arr) {
    if (num > lar) {                          //Checks whether num is greater than lar or not
        sec_lar = lar;                       //If num is greater than lar then lar value store in sec_lar 
        lar = num;                          //Num is store in lar
    } else if (num > sec_lar && num < lar) {         //Checks whether num is greater than sec_lar and num is smaller than lar or not
        sec_lar = num;                              //Store num value in sec_lar
    }
    } 
    return (sec_lar === 0) ? null : sec_lar;      //Used ternary operator to check sec_lar equal to 0 or not and return 
}
console.log(Second_Largest(Arr));               //Call to Second_Largest function with argument Arr


// ---->> 3rd - Write a JavaScript function that takes an array of objects and a key, and returns an array of values corresponding to that key.
let object = [{name: "John", age: 25}, {name: "Jane", age: 30}, {name: "Jim", age: 20}, {name: "Jack", age: 35}, {name: "Jacob", age: 35}]
    //Created an array named as object with key and values as its elements
let array =[]                     //Created an empty Array named as array
for(let i in object) {            //for...in loop is used to take each element from the Array named as object
    let a = object[i].name       //Store the name of ith object in a
    array.push(a)               //Push an element to the end of an array
}
console.log(array)             //Prints an array of values corresponding to the keys


// ---->> 4th - Calculate the factorial of every element in an array and store it in a new array.
arr=[1,2,3,4,5]                                        //Created an array named as arr
// console.log(arr)                                      //Prints the arr array
let Factorial_of_each_number = (number, factorial = 1) => {    //Created arrow function and store return value in Factorial_of_each_number
    if(number){                                                            //Checks number
       return Factorial_of_each_number(number-1, factorial*number);       //Used recursive function and return
    };
    return factorial;                                                     //Returns factorial
};
let Factorial_Array = arr => arr.map(number => Factorial_of_each_number(number));       //Used map method on arr array
let New_Array=Factorial_Array(arr)          //Call to Factorial_Array with argument arr and store in New_Array
console.log(New_Array);            //Prints the New_Array with the factorial of each number which is present in arr


// ---->> 5th - Create a function to find the intersection of two arrays.
let array_1 = [1, 2, 3, 4];      //Created an array named as array_1                           
let array_2 = [3, 4, 5, 6];     //Created an array named as array_2
function intersection_of_two_arrays(array1, array2) {         //Function is defined with two parameters as array1 and array2
    return array1.filter(elements_in_array => array2.includes(elements_in_array));      
    //filter method returns a new array with only the elements which are present in both array_1 and array_2.
    //includes method is used to checks if each element in array1 is included in array2
}
console.log(intersection_of_two_arrays(array_1, array_2))    //Call to intersection_of_two_arrays function with argument array_1, array_2

