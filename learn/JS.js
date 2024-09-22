// This is JavaScript
"use strict";
/*
Long Comment
*/

// Variable
const constant = "constant variable";
let variable;
let string = "string" + 'string' + `string`;
let number = 1;
let boolean = true;
let $_ = `${array[0]}`
typeof variable;

// Array
let array = ["red", "black"];
array[0] // red
array[2] = "white"; // Add to array
delete array[2]; // Remove from array
array[1] = "orange" // Change to array
item in array;
array.length;
item // items

// Object
let object = {color1: "red", color2: "black"};
object.color1 || object["color1"] // red
object["color3"] = "white"; // Add to object
delete object.color3; // Remove from object
object["color1"] = "dark red" // Change to object
key in object;
key // keys
object[key] // values of keys

console.log('message');
alert("alert");
let prompt = prompt("Prompt", '');
let confirm = confirm("Confirm");

String() // Converts a number, boolean to a string
Number() // Converts a digit to a number
Boolean() // "..." 1 -> true      "" 0 -> false

// IF
if (condition1) {
    console.log("condition1 is true");
} else if (condition2){
    console.log("condition1 is false, condition2 is true");
} else {
    console.log("conditions are false");
};
let ifq = (condition1) ? console.log("condition1 is true") : // if
    (condition2) ? console.log ("condition1 is false, condition2 is true") : // else if
    console.log("conditions are false") ; // else

// FOR
for (const i = 0; i < n; i++) {
    // repeat until i >= n - 1
    return i;
};
for (const i of array) {    // For of
    // repeat for all items
    return i;
}
for (const key in object) {    // For in
    // repeat for all keys
    return key;
};

// FUNCTION
/**
 * @param {type} e
 * @return {type}
 */
function myFunction(e) {
    // code of function
    return e;
};
let myFunction = (e) => { // arrow function
    return e;
}

// WHILE
while (condition) {
    console.log("condition is true");
};
do {
    console.log("condition is true, is not used for first loop");
} while (condition);
// Condition must be true, when it's false the loop breaks

// SWITCH
switch (expression) {
    case x:
        // code for x
        break;
    case y:
    case z:
        // code for y & z
        break;
    default:
        // code for default
};

//break; breaks the loop
//continue; continues the loop, skipping that one loop item

// CLASS
class MyClass {
    
    constructor(name) {
        this.name = name;
    }
    say() {
        return this.name;
    }
}
const MyClass2 = class {
    constructor(name) {
        this.name = name;
    }
}
function MyClass(name) { // add a constructor
    this.name = name
}
MyClass.prototype.say = function() { // add a function
    return this.name
}
const Class = new MyClass("Wither")
Class.say(); // Wither

try {    // Try
    // code to try
} catch (error) {
    // code error
};

/* Array Methods: array.
toString(): convert array into string
join(): toString() with something in between
pop(): remove the last element of array
push(): add an element at the end of array
shift(): remove the first element of array
unshift(): add an element at the beg
forEach(): call function for every array element
map(): create array by performing function on each array element
filter(): create array by testing every array element
reduce(): take every element to form one
every(): check all array values
some(): check some array values
*/

let date = new Date();

/* Math: Math.
PI: get pi
random(): return random number   Math.floor(Math.random() * 11)=0 to 10
round(x): round x, no decimal places   round(4.6)=5
pow(x, y): return x^Y
sqrt(x): return sqrt of x
abs(x): return absolute value of x
ceil(x): round x UP to the nearest integer
floor(x): round x DOWN to the nearest integer
sin(): return the sine of angle x    angle degree=(degree * Math.PI / 180)
cos(): return the cosine of angle x
*/

console.log( null || 0 || 1 ); // 1 (the first truthy value)
console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)

console.log( 1 && 2 && null && 3 ); // null (the first falsy value)
console.log( 1 && 2 && 3 ); // 3 (all truthy, returns the last value)

console.log( undefined ?? "Me" ); // Me (the first defined value)
console.log( undefined ?? null ) // null (all undefined, returns the last value)
/*
and: &
or: |
xor: ^
not: ~
left shift: <<
right shift: >>
zero-fill right shift: >>>
*/

/* Math signs
+: adds numbers
//: integer result of division
%: remainder of division
*/

