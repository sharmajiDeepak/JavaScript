/* Chapter - 02 Promise Part 1*/

/*Promise is an object that represents an eventual completion (success or failure) of asynchronus calls or execution.
* Promise is beneficial to overcome Callback hell issue. It uses promise chaining concept.
*/

//Create a Promise
// Promise object constructor accepts a callback function which has two arguments resolve and reject

const oPromise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Promise Resolved");
        resolve(); // to return successful completion of promise
    }, 2000); // using setTimeout function to delay execution to mimic network call to see Promise implementation
});

// To get outcome of Promise, then is used
oPromise1.then(() => {
    //console.log("Promise completed response");
})

// Unsuccessful completion of eventual operation, we can use catch to handle error.
const oPromise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        const error = false;
        if(error) {
            reject(new Error("Something went wrong!!")); // to return error message on failure of promise
        }
        const data = "Hello Deepak";
       // resolve(data); // To send data on successful completion becak to caller, we can pass it in resolve.
    }, 2000);
});

// To get outcome of Promise, then is used
oPromise2.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})

// Promise chaining - Promise chaning are helpful to resolve callback hell issue. If we need to call multiple request, one after other we can use promise chaining 
const oPromise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        const error = false;
        if(error) {
            reject(new Error("Something went wrong!!")); // to return error message on failure of promise
        }
        const data = {name:"Deepak", age:23, giveage:function(){ return `User ${this.name} age is ${this.age}.`}};
        resolve(data); // To send data on successful completion becak to caller, we can pass it in resolve.
    }, 2000);
});

// To get outcome of Promise, then is used
oPromise3.then((data) => {
    console.log(data.name);
    return data; // passing data to another then.
}).then((data) => {
    console.log(data.giveage.call(data)); // calling function and printing name
}).catch((error) => {
    console.log(error);
})