/* Chapter - 04 String */

// Strings in JavaScript can be declared in 2 ways
// 1. Primitive - Declared using string literals. For Eg:- let string1 = "Hello" or string1 = String(1) ~> coerced to primitive
// 2. Using the String Object by using new Keyword. For Eg:- let String2 = new String("Hello");

let string1 = "Hello";
let string2 = String("World"); //-> Coerced to primitive when called as function
let string3 = new String("Deepak Sharma"); // -> returns object when used with new keyword

// String1 and String2 are primitive declaration and String3 is using String Object. Type of these declaration will be different

console.log(typeof string1); // -> string type
console.log(typeof string2); // -> string type
console.log(typeof string3); // -> object type -> Should be rarely used.

// String Object should be rarely used or should be avoided to encounter any unwanted results.
// When performed any operation using string they are coerced to the String primitive.

//Strings can be declared as template literals like `{}`
const string4 = `Concatenation of String is ${string1} ${string2} ${string3} `;
console.log(string4);

// Calculate Length of String
const stringLength = string4.length;
console.log(stringLength);

// AT function -> Return the element atgive index
console.log(string4.at(6));
console.log(string4.at(-2)); // Negative index counts from last

//concat -> Concatenates the string

const concatString = string1.concat(" ", string1, string2, string3, string4);
console.log("concat stirng ", concatString); // Use Template literal over concat method

const lonString = "Hello HelloWorldDeepak SharmaConcatenation of String is Hello World Deepak Sharma";
console.log(concatString.endsWith("Deepak Sharma ")); // check whether the string ends with the provided input

console.log(concatString.indexOf("D")); // index no of character of first occurence
console.log(concatString.lastIndexOf("D")); //last index no of character of last occurence

console.log(concatString.padEnd(concatString.length +5, "$")); // Pad End adds the character at the end of string till specified length. Length should be greater then total length of string.

console.log(concatString.repeat(3)); // Repeat the string upto mentioned number of count

console.log(concatString.substring(3, 68)); // substring gives the part of string mentioned between the index numbers (start & end)

/* Difference between substr and substring is that subst accepts the two parameter - Starting index, and length
whereas substring accepts starting index and ending index */

const objString = new String("deepak");
console.log(objString); // returns {"deepak"}
console.log(objString.valueOf()); // Returns the primitive string from an string object



