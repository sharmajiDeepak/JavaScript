/* Chapter - 04 Object {} */

const obj = {};
console.log(obj);

const obj1 = new Object({a:"name"});
console.log(obj1);

const obj2 = {
    "name": "Deepak sharma",
    "age": 23,
    "city": "Delhi"
};
console.log(obj2.name); // accessing property of object

//adding property to object
Object.defineProperty(obj2, "gender", {
    "enumerable": true,
    'writable': true,
    "value": "Male"
});
console.log(obj2);

//loop object for..in
for (const key in obj2) {
  console.log(key);
  console.log(obj2[key]);
}

//copy object
const obj3 = {...obj1, ...obj2};
obj1.a = "nameee";
console.log(obj1);
console.log(obj3);

const obj4 = Object.entries(obj3);
console.log(obj4);

Object.freeze(obj3); // prevents the modification/addition of properties and its value
obj3.test = "hello";
console.log(obj3);

Object.seal(obj3); // can modify property value only