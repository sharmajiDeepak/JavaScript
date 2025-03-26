/* Chapter - 03 Array [] - Part 3 */
 const arr = ["Book1", "Book2", "Book3", "Book4"];

 //forEach loop

 //forEach loop also iterates over each element of array but it does not return an value even if we include return statement.
 const oVal = arr.forEach((oBook, index) => {
    console.log("oBook", oBook); // prints book name Book1, Book2...
    console.log("index", index); // prints index 0,1,2...
    //return oBook;
 });

 //console.log("oval", oVal); // undefined

 // For..of loop is used to iterate over array or map or string

 for (const element of arr) {
   console.log(element);
 }

 let sStr = "Hello My Name is Deepak";
 for (const element of sStr) {
   //console.log("ss", element)
 }

 const oObj = {"name": "Deepak", "age": 23, "city":"Delhi"};
 /* for (const element of oObj) {
   console.log("obj", element) // gives error as object is not interable so can not use for..of
 } */

//To use for..of on object we have alternative call Map. Map store the key value pair. It can have function, string, object as key but object can only have either string or symbol.
 const oMap = new Map();
 oMap.set("id", 1234);
 oMap.set("name", "Deepak");
 oMap.set("id", 4567); // map do not accepts duplicate key. it will overwrite the value for exisitng key
console.log(oMap);

for (const [key, value] of oMap) { // using array [] destructuring
   //console.log(element); //{ 'id' => 4567, 'name' => 'Deepak' }
   console.log(`Key is ${key}. And value is ${value}`);
}

// Reduce Method.

const aArray = [1,2,3,4,5,6,7,8,9,10];
const num = 0;
const res = aArray.reduce((acc, curr) => {
   return acc + curr;
}, num);
console.log(res);
