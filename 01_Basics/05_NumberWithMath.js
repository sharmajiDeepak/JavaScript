/* Chapter - 05 Number with Math */

const num1 = 1000; // primitive value of Number
console.log(num1);

const num2 = new Number(1000); // Number Object value
console.log(num2);
console.log(num2.valueOf()); // return primitive value from number object

const num3 = Number(1000); // coerced primitive value
console.log(num3);

// toFixed - return decimal point as passed by number
console.log(num3.toFixed(2)); // 1000.00 -> return a string
console.log((1000.678).toFixed(2)); // 1000.68
console.log((100.678).toFixed(4)); // 1000.6780

// toLocaleString - returns the string with localized number representation
const num4 = 100000000;
console.log(num4.toLocaleString("en-IN")); // 10,00,00,000
console.log(num4.toLocaleString("en-US")); // 100,000,000

// toString - Converts number to string and prove all the prototype method of Number
console.log(num4.toString().length); //9

// toPrecision
const num5 = 100.7889;
console.log(num5.toPrecision(3)); // 101

const num6 = 100;
console.log(num6.toPrecision(3)); // 100

/*****************  MATH   ************************ */

//Math.abs to calculate the absolute(positive) value
console.log(Math.abs(-5)); // 5

//Math.floor - to calculte the lowest round off value
console.log(Math.floor(2.3)); // 2
console.log(Math.floor(2.9)); // 2

//Math.ceil - to calculte the highest round off value
console.log(Math.ceil(2.3)); // 3
console.log(Math.ceil(2.9)); // 3

//Math.pow - to calculte the power of given number. First number is base & second number is exponent
console.log(Math.pow(2, 3)); // 8

//Math.max - returns the maximum value from given number
console.log(Math.max(2,4,6,8,23,46)); // 46
const numArr = [2, 3, 4, 6, 23, 76];
console.log(Math.max(...numArr)); // 76 - Using the spread operator

//Math.min - returns the minimum value from given number
console.log(Math.min(...numArr)); // 2

//Math.random - Returns te random number from range of 0 to 1
console.log(Math.random()); // 0.9963535

//To get random number starting from 1, we can multiply it from 10 and then add 1 to avoid the posibility of coming 0 at any point
console.log((Math.random() * 10) + 1);

//To get random number between any 2 number, we can multiply random number with difference of max and min number and then lastly adding total with min number

const min = 50;
const max = 100;
console.log((Math.random() * (max - min)) + min); // Rnadom number between 50 to 100

