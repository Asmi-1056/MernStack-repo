// Asmi Purarkar

// Assignment 1

//----->> 1st Datatypes and Variables
let Age=22                             //Number datatype
let Percentage=86.7                    //Number datatype
let SDetails="Students Information"   //String datatype
let TSNames= ["Shaurya", "Omkar", "Angad", "Athang"]   //Array >> We can store any datatype in arrays.
let SBoolean=true //Boolean datatype
let Student = {       //Object
        Name:"Omkar", //Name is a key and Omkar is a value.
        Branch:"CO",  //Branch is a key and CO is a value     
}
console.log(SDetails) //Prints SDetails
console.log(TSNames)  // Prints TSNames
console.log(Student)  //Prints Student
console.log(Percentage) //Prints Percentage
console.log(Age)        //Prints Age
console.log(SBoolean) // Prints SBoolean


//----->> 2nd Operators and Expressions
let a=parseInt(prompt("Enter First Number:"))  //Taking input from the user
let b=parseInt(prompt("Enter Second Number:")) //Taking input from the user
console.log("Addition is:",a+b)      //Prints addition of a and b 
console.log("Subtraction is:",a-b)   //Prints subtraction of a and b
console.log("Multiplication is:",a*b) //Prints multiplication of a and b
console.log("Division is:",a/b)      //Prints division of a and b


//----->> 3rd Conditional Statements
let c=prompt("Enter Number:")             //Taking input from the user
if (c>0) {                               //If the entered number is positive
    console.log("Number is Positive")    //Prints number is positive
} else if (c<0) {                        //If the entered number is negative
    console.log("Number is Negative")    //Prints number is negative
} else if (c==0) {                      //If the entered number is zero
    console.log("Number is Zero")      //Prints number is zero
} else {                               //This will execute when all the above conditions does not satisfy 
    console.log("Invalid Number")     //Prints invalid number
}


//----->> 4th Control Flow Keywords
let d    //Declaring d as variable
for (d=0;d<=20;d++) { //Initialize d and check d less than or equal to 20 and increment d
    if (d%2==0) {    //To check Even Numbers
        if(d==0) {   
            continue //continue skips the current iteration
        }
        console.log(d) // Prints the value of d
    }
}


//---->> 5th Combining Concept
var num = prompt("Enter Numeric Grade(0-100):"); //Taking input from the user 
if (num >= 90 && num <= 100) //When the num is from 90 to 100 then the statement will execute
    {
    console.log('You are promoted with grade - A'); //Prints You are promoted with grade - A
} 
else if (num >= 80 && num <= 89) //When the num is from 80 to 89 then the statement will execute
    {
    console.log('You are promoted with grade - B'); //Prints You are promoted with grade - B
} 
else if (num >= 70 && num <= 79) //When the num is from 70 to 79 then the statement will execute
     {
    console.log('You are promoted with grade - C'); //Prints You are promoted with grade - C
} 
else if (num >= 60 && num <= 69) //When the num is from 60 to 69 then the statement will execute
     {
    console.log('You are promoted with grade - D'); //Prints You are promoted with grade - D
} 
else if (num >= 0 && num <= 59) //When the num is from 0 to 59 then the statement will execute
    {
    console.log('You are promoted with grade - F'); //You are promoted with grade - F
} 
else {                 //This will execute when all the above conditions does not satisfy
    console.log("Invalid Numeric Grade. Please enter valid Numeric Grade."); //Prints Invalid Numeric Grade. Please enter valid Numeric Grade.
}
