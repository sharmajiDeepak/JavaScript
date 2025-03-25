/* Chapter - 02 Data Types (Primitive, Non-Primitive and Trivial)*/

/* JavaScript is a dynamic type - (Variable data types changes as per the value assigned to them)
* and weakly type - (When operations performed on two different data types,
instead of throwing error it does implicit conversion)
language */

//E.g. of Dynamic Type
let fullName = "Deepak";
console.log(typeof fullName);

fullName = 123;
console.log(typeof fullName);

fullName = true;
console.log(typeof fullName);

//E.g. of weak Type
let operations = 1 + "3"
console.log(typeof operations + " value: " + operations);

operations = 1 + "Deepak"
console.log(typeof operations + " value: " + operations);

operations = 2 + true
console.log(typeof operations + " value: " + operations);

operations = "Deepak" + true
console.log(typeof operations + " value: " + operations);

operations = 2 + {}
console.log(typeof operations + " value: " + operations);

operations = "Deepak" + []
console.log(typeof operations + " value: " + operations);

/* * In JavaScript, total 8 Data Types can be categorised in 3 categories
* 1. Primitive - Immutable in nature (String, Number, Boolean, Symbol)
* 2. Referenced - Mutable in nature (Object, Array)
* 3. Trivialn- but of Primitive nature (null, undefined)
 */

//Immutability referes when values of the variable can not be changed with reference to other.

let titleName = "Mr";
let titleofDeepak = titleName;

console.log(titleName);
console.log(titleofDeepak);

titleofDeepak = "Mrs." // Changing the value of titleofDeepak will not change titleName. It copies the actual value not reference.
console.log(titleName);
console.log(titleofDeepak);



// Mutability allows you to change the existing value without creating new one.
// Reference data types works on reference rather then actual value.
// Stack - where variable of data are placed. Heap - where actual value is stored.

const obj = {
    "name": "Deepak Sharma",
    "age": 23,
    "gender": "Male"
};

const obj2 = obj; // It is copying the reference of obj to obj2, not the actual values.

obj.age = 32; // Changing value of age of obj will change the value of age ofobj2 as well
console.log(obj);
console.log(obj2);

const obj3 = Object.assign({}, obj2); // creating a new copy

obj2.age = 35; // Changing value of age of obj2 will not change the value of age of obj3 or ice-versa
console.log(obj);
console.log(obj2);
console.log(obj3);

/*Primitive types form a wrapper of object when values are initialized to provides the access to inbuilt method for that type or object.*/

const city = new String("Delhi");
console.log(city);

const num = new Number(23);
console.log(num);

const bool = new Boolean(true);
console.log(bool);

// null and undefined accepts only single value.
// typeof null is object whereas typeof undefined is undefined

const nullValue = null;
console.log(typeof null); // object

const undefinedValue = undefined;
console.log(typeof undefined); // undefined