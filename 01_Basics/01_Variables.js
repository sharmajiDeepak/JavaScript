/* Chapter - 01 VARIABLES (const, let, var)*/

//"use strict" // use strict keyword apply the strict rule and do not allow us to use undeclared variable.

const fullName = "Deepak"; // Read only varaible declaration

let age = 35;

// console.log(gender); 
/* Due to concept of hoisting in javaScript,
we are able to log or use the varaible (declared using var) without its declaration. */

var gender = "Male";

//address = ""; // Never use undeclared variables. Memory to the variables are assigned only if they are declared using let, const or var.

//console.log(address);
/* Hoisting concept is applicable to let and const as well but
* we can not use or log the let and const variable untill they are initialized.
* Due to the reason, let and const are in the Temporal Dead zone untill they are initialized hence result in error */
let address;

/*
* As of ES6, it is recommended to use let or const variable declaration to enable block "{}" scope.
* In prior versions, when we declare variables using var
* there was no concept of scope and everything using var was assigned to global or this scope.  */

console.table([fullName, age, gender, address]);
