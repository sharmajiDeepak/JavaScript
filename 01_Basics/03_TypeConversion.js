/* Chapter - 03 Type Conversion */

let num = "35";
console.log(typeof num);

num = Number(num);
console.log(typeof num + "and value is: " + num);

let decVal = "3.00"
console.log( Number(decVal));

let numString = "35str";
numString = Number(numString);
/* In conversion only pure numbers (with or without decimal) in a string form can be converted to number
 else it will result in NaN (not a number) value */
console.log(typeof numString + "and value is: " + numString);

// isNaN can be used to check if value is number or Not a Number

console.log(isNaN(" "));
console.log(isNaN("234.14"));
console.log(isNaN("234"));
console.log(isNaN("234.00"));
console.log("null",isNaN(null));
console.log("undefined",isNaN(undefined));
console.log("true",isNaN(true));
console.log("false",isNaN(false));
console.log(" empty object",isNaN({}));
console.log(" object",isNaN({"a":"1"}));
console.log(" empty array",isNaN([]));
console.log(" array",isNaN(["1"]));

// Boolean to string

let bool = true;
console.log(typeof bool);

bool = String(bool);
console.log(typeof bool + " and " + bool);

// String to Boolean

let stringBool = " ";
console.log(typeof stringBool);

stringBool = Boolean(stringBool);
console.log(typeof stringBool + " and " + stringBool);  // return boolean and true

stringBool = "test";
stringBool = Boolean(stringBool);
console.log(typeof stringBool + " and " + stringBool); // return boolean and true

//Boolean to Number

let boolNum = true;
boolNum = Number(boolNum)
console.log(boolNum); // returns 1

boolNum = false;
boolNum = Number(boolNum)
console.log(boolNum); // returns 0


