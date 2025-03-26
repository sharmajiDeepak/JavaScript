/* Chapter - 01 Array [] - Part 1*/

// Array stores the multiple values of any type. eg:- const arr = [1, "City", {"Name":"Deepak"}]

const arr = [1, "City", {"Name":"Deepak"}];
console.log(arr); // prints [ 1, 'City', { Name: 'Deepak' } ]
console.log(arr.length); // 3

//Javascripts support 1-Dimensional array. In order to create 2-Dimensional array, needs to create nested arrays.

const multiArray = ["City1", "City2", ["State1", "State2", "State3", ["Country1", "Country2", "Country3"]]];
console.log(multiArray[2][1]); // print state2
console.log(multiArray[2][3][1]); // print Country2

//To convert nested array into a single array, we can use method Flat and pass the number parameter as depth indicating 
// it should go till what level to convert it into single array
const aFlatArray = multiArray.flat(2);
console.log(aFlatArray);

//To insert elements in array, can use push method. It will insert elements at last.
const arrVal = [1, 2, 3];
arrVal.push(4)
console.log(arrVal); // [1, 2, 3, 4]

//To insert elements in array, can also use unshift method. It will insert elements at begning or first index.
arrVal.unshift(5)
console.log(arrVal); // [5, 1, 2, 3, 4]

//To remove elements from array, can use pop method. It will remove element from last.
arrVal.pop()
console.log(arrVal); // [5, 1, 2, 3]

//To remove elements from array, can also use shift method. It will remove element from first.
arrVal.shift(5)
console.log(arrVal); // [1, 2, 3]

//To remove element at any index we can use slice or splice method.

/* *Difference between slice and splice method
Slice method - Remove the element without affecting the original array and returns a copy of array
Splice method - Remove the element from original array and returns the removed array
*/
//arrVal before - [5, 1, 2, 3, 4 ]
const slicedArray = arrVal.slice(1,3);
console.log(slicedArray); //[1, 2] as it do not include the end index. so it will consider end as end-1.
console.log(arrVal); // [ 5, 1, 2, 3, 4 ] original Array unchanged

const splicedArray = arrVal.splice(1,3);
console.log(splicedArray); //[1, 2, 3] as it do not include the end index. so it will consider end as end-1.
console.log(arrVal); // [ 5, 4 ] original Array unchanged

const newArray = [1, 2, 3, 4 ];

//To find index of any element in array
console.log(newArray.indexOf(3)); //2

//Reverse the element
console.log(newArray.reverse()); // [ 4, 3, 2, 1 ]

//sorting array
console.log(newArray.sort()); 

//checking if array contains value at any index
console.log(newArray.includes("deepak")); // false
newArray.push("deepak");
console.log(newArray.includes("deepak")); // true

const arr1 = [1, 2, 3, 4];
const arr2 = ["Deepak", "Shyam", "Krishna"];

//Merging two arrays
const mergedArr = arr1.concat(arr2); // concat do not modify any existing array
console.log(mergedArr); // [ 1, 2, 3, 4, 'Deepak', 'Shyam', 'Krishna' ]

//Merge using spread operator
console.log([...arr1, ...arr2]); //[ 1, 2, 3, 4, 'Deepak', 'Shyam', 'Krishna' ]

// If need to/copy any element from one position to any other position within an array.1 parameter - Target where we wants to copy. 2 - Which element to copy. 3- till what index to copy 
console.log(arr1.copyWithin(0, 2, 3)); // [ 4, 2, 3, 4 ]

//Returns element at given index
console.log(arr1.at(1)); //2