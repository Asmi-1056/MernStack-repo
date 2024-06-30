// Asmi Purarkar

// Assignment 2

// ---->> 1st Multiplication Table Generator
for(i=1;i<=10;i++) {  //Here i indicates the number whose multiplication table will be printed
    console.log("\nMultiplication Table of " + i)
    for(j=1;j<=10;j++) { //Here j indicates the number which will be multiplied with i
        let result = j*i  //Multiplying j*i and storing the result in result
        console.log(i + "*" + j + "=" +result) //Prints the entire multiplication table of numbers from 1 to 10
    }
}


// ---->> 2nd Sum of Numbers in an Array
let arr = [1,2,3,4,5,6,7]; //Created an array as arr
let sum_of_arr = 0; //Declared a let variable as sum_of_arr and initialized it with 0
for(let val of arr) { //Used for...of loop
    sum_of_arr += val //Add the sum of array and value and overrides it in sum of array
}
console.log("Sum of numbers in an array is:", sum_of_arr) //Prints Sum of numbers in an array is:28


// ---->> 3rd Palindrome Checker
var ipstr1 = "LEVEL"; //Input string 1 'LEVEL'
var ipstr2 = "Level"; //Input string 2 'Level'
function check_str_is_Palindrome(str) {  //Created a function as check_str_is_Palindrome and passing str as parameter
    var len = str.length;   //Stored the length of string in len 
    for (let s = 0; s < len / 2; s++) {
        if (str[s] !== str[len - 1 - s]) {
            return false;
        }
    }
    return true;
}
console.log(check_str_is_Palindrome(ipstr1)); // Prints true
console.log(check_str_is_Palindrome(ipstr2)); // Prints false


// ---->> 4th Fibonacci Sequence Generator
function Fibonacci_Series(n) {   //Created a function as Fibonacci_Series and passing n as parameter 
    if (n === 1) {       //Checks the datatype and value
		return [0];
	}
    if (n === 2) {      //Checks the datatype and value
		return [0, 1];
	}
    var fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]); 
    }
    return fibo;
}
console.log(Fibonacci_Series(20)); //Prints fibonacci series of 20 numbers


//---->> 5th Block Scope with Let and Const
let x = 2  // Declaring variable let as x 
if (x) {
    let asm = "This is JS variable-let";  //Declaring variable let as asm
    const sneh = "This is JS variable-const"; //Declaring variable const as sneh
    var darsh = "This is JS variable-var"; //Declaring variable var as darsh
// Accessing the variables inside the if block
    console.log(asm) //Prints "This is JS variable-let"
    console.log(sneh) //Prints "This is JS variable-const"
    console.log(darsh) //Prints "This is JS variable-var"
}
// Block Scope
// Accessing the variables outside the if block
// We can access var variable outside the if block
// We cannot access the let and const variables outside the if block because we have declared the variables within the if block
// Error will occur while excuting the code
console.log(darsh) // We can access var variable because var is defaultly global
console.log(asm) 
console.log(sneh)


