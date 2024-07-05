// Asmi Purarkar

// Assignment 4: Object and String Methods

// ---->> 1st - Write a function that takes an object and returns an array of the object's keys and values.
function getKeysAndValues(persons) {        // Created a function getKeysAndValues with persons as parameter
    let kvarr = [];                        // Created an empty array named as kvarr
    for (let pkv in persons) {           
        let k = []                        // Created an empty array named as k
        k.push(pkv, persons[pkv]);       // push method is used to add pkv and persons[pkv] in array named as k
        kvarr.push(k)       // Array k is added in array kvarr
    }
    return kvarr;     //Returns kvarr
}
let pers1 = {       // Created an object named as pers1
    Name: 'Omkar',
    Age: 28,
    torf: true,     
  }; 
console.log(getKeysAndValues(pers1));    //Prints [ [ 'Name', 'Omkar' ], [ 'Age', 28 ], [ 'torf', true ] ]


/// ---->> 2nd - Create a function to convert a string to title case.
function toTitleCase(str) {   //Created a functon named as toTitleCase with parameter str
    let w = str.toLowerCase()  //Convert entire string to Lowercase
    let words = str.split(" ")  //String separated by space using split() and split returns array    
    words = words.map(word=>word.charAt(0).toUpperCase()+word.slice(1))  
         //map method is used to traverse each element at different indexes in array
         //charAt method is used to access the particular thing at specified index
         //toUpperCase method is used to capitalized word
         //slice method is used to slice first element
    words = words.join(" ")    //join is used to join the elements of array with space
    return words       //Returns words
}
console.log(toTitleCase("hello world"));             // Prints "Hello World"
console.log(toTitleCase("javascript node.js"));      // Prints "Javascript Node.js"


/// ---->> 3rd - Implement a function that checks if an object is empty.
function emptyobj(obj) {                    // Created a function named as emptyobj with parameter as obj
    if(Object.keys(obj).length === 0) {     //Checks whether Object.keys length is equal to zero or not 
        console.log("object1 is empty")     // Prints "object1 is empty"
    }
    else {
        console.log("object1 is not empty");  //Prints "object1 is not empty"
    }
  }
let object1 = {       //Created an object1
    // n:'asm', 
    // a:10,
};
emptyobj(object1)   //Call to emptyobj with argument object1


// ---->> 4th - Write a function to count the number of occurrences of each character in a string.
function charCount(str) {      //Created a function charCount with str as a parameter
    str = str.toLowerCase();   //To convert entire string to Lowercase
    let countchars = {};       //Created an empty array named as countchars
    for (let ch of str) {      //Used for...of loop to take single character from string
      countchars[ch] = (countchars[ch] || 0) + 1;  
    }
    return countchars;         //Returns countchars
}
console.log(charCount("helLo"));       //Prints { h: 1, e: 1, l: 2, o: 1 }
console.log(charCount("goOdbye"));    //Prints { g: 1, o: 2, d: 1, b: 1, y: 1, e: 1 } 


