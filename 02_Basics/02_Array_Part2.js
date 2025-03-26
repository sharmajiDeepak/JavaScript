/* Chapter - 02 Array [] - Part 2*/

const arr = [1, 2, 3, 4];
console.log(arr);

// If we need to apply any logic on every element of array then there is function called map.
//Eg:- If we want to multiply every number of arr by 2

function multiply (num) {
    return num * 2;
}
const multipliedArr = arr.map(multiply);
console.log(multipliedArr); // print [ 2, 4, 6, 8 ]

// If we want a subset of main array which satisfy the condition passed, we can use filter function.
// Eg:- I we want number greater then 5 from multiplied array
function greaterThan5 (num) {
    return num > 5;
}
const filteredArr = multipliedArr.filter(greaterThan5);
console.log(filteredArr); // [6, 8]

// If we are not sure what data is there in array and we need to iterate over it to see its data
const IteratableArray = filteredArr.entries(); // Returns iteratable Data
console.log(IteratableArray);
for (const element of IteratableArray) {
    console.log(element); // return key and Value [0, 6], [1, 8]
}

// If for a given array, we need to check whether all element pass the test or not. We can use every method.
// It returns false if any of the element fails the test and stop further execution
const evenArr = [2, 4, 6];
function isEven (num) {
    return num%2 === 0;
}
let bResult = evenArr.every(isEven);
console.log(bResult); // return true

const oddArr = [2, 4, 1, 6];
bResult = oddArr.every(isEven);
console.log(bResult); // false

// Fill - It fills the array with provided value
console.log(oddArr.fill("Deepak", 1, 3)); // [ 2, 'Deepak', 'Deepak', 6 ]

//Find - Method returns the first element which satisfies the test else return undefined if no element satisfies the test
const arrStr = ["Deepak", "Kirthi", "Ranjhana", "Sanjana"]
function matchedString(sVal) {
    return sVal.length > 6
}
console.log(arrStr.find(matchedString)); // Ranjhana

//Find - Method returns the last element which satisfies the test else return undefined if no element satisfies the test
console.log(arrStr.findLast(matchedString)); // Sanjana

// finds the index of first value that satisfied the condition
console.log(arrStr.findIndex(matchedString)); // return 2

// finds the index of last value that satisfied the condition
console.log(arrStr.findLastIndex(matchedString)); // return 3

//some - finds atleast one element satisfies the condition and return true or false based on condition
console.log(arrStr.some((str) => str.includes("zee")))