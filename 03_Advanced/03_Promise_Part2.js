/* Chapter - 02 Promise Part 2*/

/*Promise Concurrency
* Promise Concurrency is a concept when multiple promises are executing at the same time 
* and based on the promise result we need outcome.
* Promise concurrency provides 4 methods to determine the result
* 1 - Promise.all() -Fulfills and return to then handler when all of the promises fulfill; rejects when any of the promises rejects which returns to catch and do not continue with other promises.
* 2 - Promise.allSettled() - Fulfills when all promises settled. //Return in then including status
* 3 - Promise.any() - Fulfills when any of the promises fulfills; rejects when all of the promises reject.
* 4 - Promise.race() - Settles when any of the promises which is faster settles. In other words, fulfills when any of the faster promise fulfills; rejects when any of the promises rejects. 
*/

const oPromise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        const error = false;
        if (error) {
            reject("Promise 1 Failed");
        }
        resolve("Promise1 Resolved");
    }, 200);
});

const oPromise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        const error = false;
        if (error) {
            reject("Promise 2 Failed");
        }
        const data = "Hello Deepak!! Promise 2 successfull";
        resolve(data);
    }, 200);
});

const oPromise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        const error = true;
        if (error) {
            reject("Promise 3 failed");
        }
        const data = { name: "Deepak", age: 23, giveage: function () { return `User ${this.name} age is ${this.age}.` } };
        resolve(data);
    }, 2000);
});

//Promise.all - Either All fails or All reject
const oPromiseAll = Promise.all([oPromise1, oPromise2, oPromise3]).then((data) => {
    console.log("All Promise Data ", data); // returns response of all promise in array
    /**Response
     * All Promise Data  [
        'Promise1 Resolved',
        'Hello Deepak!! Promise 2 successfull',
         'Promise1 Resolved'
        ]
     */
}).catch((error) => {
    console.log("All Error", error); // If any prmoise fails.. it will come in  and All Promise will fails and will not continue.
})

//Promise.all - It will fulfill the request and return to then even if any promise failed.
//It will have the status as fulfilled or rejected based on status and either value/data on success or reson on fail.
// no need to attach catch.
const oPromiseAllSettled = Promise.allSettled([oPromise1, oPromise2, oPromise1]).then((data) => {
    console.log("All Promise Settled Data ", data); // returns response of all promise in array
    /**Response
     * All Promise Settled Data  [
        { status: 'fulfilled', value: 'Promise1 Resolved' },
        {
            status: 'fulfilled',
            value: 'Hello Deepak!! Promise 2 successfull'
        },
        { status: 'fulfilled', value: 'Promise1 Resolved' }
        ]
     */
})


//If any of the promise fulfill, it will result into then and will return.
const oPromiseAnySettled = Promise.any([oPromise1, oPromise2, oPromise3]).then((data) => {
    console.log("Any Promise Settled Data ", data); // log response of any fulfilled promise
    /**Response
     * Any Promise Settled Data  Hello Deepak!! Promise 2 successfull */
}).catch((error) => {
    console.log("Any Promise Error", error); // If all prmoise fails.. it will come in catch and will log error..
    /**Response
     * Any Promise Error [AggregateError: All promises were rejected] {
        [errors]: [ 'Promise 1 Failed', 'Promise 2 Failed', 'Promise 3 failed' ]
        }
     */
})

//In Race - if any of the promise which is faster either reject or fulfilled will reach either to then or catch. (whichever is faster either success or fail.)
const oPromiseRace = Promise.race([oPromise1, oPromise2, oPromise3]).then((data) => {
    console.log("Race Promise Settled Data ", data); // if promise 1 was faster so came into then as promise1 resolved quickly.
    /**Response
     * Race Promise Settled Data  Promise1 Resolved */
}).catch((error) => {
    console.log("Race Promise Error", error); // If promise 1 fails faster so will come here in catch rather then going to catch i.e., then
    /**Response
     * Race Promise Error Promise 1 Failed */
})