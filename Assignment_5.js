// Asmi Purarkar

// Assignment 5: Closures and Prototypes

// ---->> 1st - Write a function that returns a closure which adds a specific number to its argument. 
function adder(a){      //Created function named as adder with parameter a 
  return function(b) {  //Created function with parameter as b
      return a+b;       //Returns a+b
  }
}
const add=adder(5)    //Call adder function and store return function in add
console.log(add(5)) // Prints 10
console.log(add(15)) // Prints 20


// ---->> 2nd - Create a function using closure to keep track of how many times it has been called.
function subtract(a){  //Created function named as subtract with parameter a
  let count = 0;       //Initialze count as zero
  function s(b) {      //Created a function named as s with parameter b
    count++;           //Increment count
      return a-b;      //Returns a-b
  }
  s.getCount = function() {
    return count;       //Returns count
  };
  return s;            //Returns s
}
const sub=subtract(20) //Call to subtract function with argument 20 and store return function s in sub
console.log(sub(5))    //Prints 15
console.log(sub(15))   //Prints 5
console.log(`Function is called ${sub.getCount()} times`) // Prints "Function is called 2 times"


// ---->> 3rd - Implement a prototype method to calculate the area of a rectangle object.
class rectangle {    //Created a class named as rectangle
  constructor(l, w) {    //Created a constructor with parameter l(length) and w(width)
    this.l = l;
    this.w = w;
  }
  areaofrectangle() {    //Created a function named as areaofrectangle()
    return this.l * this.w;  //Return area of rectangle using formula
  }
}
const rect = new rectangle(100, 5);  //Created an instance rect of class rectangle
console.log(`The area of the Rectangle is: ${rect.areaofrectangle()}`); // Prints "The area of the Rectangle is: 500"


//  ---->> 4th - Write a function to create an object and add methods using prototype to calculate perimeter and area of a circle.
class circle {   //Created a class named as circle
  constructor(pi, r) {  //Created constructor with parameter pi and r
    this.pi = 3.14;
    this.r = r;
  }
  perimeterofcircle() {       //Created a function named as perimeterofcircle()
    return 2*this.pi*this.r;  //Return perimeter of circle using formula
  }
  
  areaofcircle() {           //Created a function named as areaofcircle()
    return this.pi*this.r**2; //Return area of circle using formula
  }
}
const cir = new circle(3.14,5); //Created an instance cir of class circle
console.log(`The perimeter of the Circle is: ${cir.perimeterofcircle()}`);   //Prints "The perimeter of the Circle is: 31.400000000000002"
console.log(`The area of the Circle is: ${cir.areaofcircle()}`);            //Prints "The area of the Circle is: 78.5"

        
//  ---->> 5th - Create a function that returns a set of functions that can increment, decrement, reset, and get the value of a private counter. Each function should be able to modify or access the private counter, demonstrating a more complex use of closures.
function Counter(){       //Created a function named as Counter()
  let count = 0;               //Intialize count as zero
  function inc(){         //Created a function named as inc()
  count++;                    //Increment count
  console.log(`Counter is incremented to ${count}`); // first it prints that "Counter is incremented to 1" then it again prints that "Counter is incremented to 2"  
}
function dec(){          //Created a function named as dec()
  count--;                   //Decrement count
  console.log(`Counter is decremented by ${count}`); //prints "Counter is decremented by 1"
}
function reset(){       //Created a function named as reset()
  count = 0;               //Reset count to zero
  console.log(`Counter is reset to ${count}`);  //prints "Counter is reset to 0"
}
function getval(){     //Created a function named as getval()
  return count;            //Returns count
} 
return{
  inc,dec,reset,getval //Returns function inc, dec, reset, getval
};
}
let counts = Counter(); //Call to Counter function
counts.inc();           //Call to inc function
counts.inc();           //Call to inc function
console.log(counts.getval()); //Call to getval function and print counter value
counts.dec();          //Call to dec function
counts.reset();        //Call to reset function
console.log(counts.getval()); //Call to getval function and print counter value
