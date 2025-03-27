/* Chapter - 01 XMLHTTPRequest*/

//XMLHTTPRequest are helpful to communicate with servers by means of API and to interchange the data.

//To use XMLHTTPRequest we need to first initialize or instantiate the XMLHTTPRequest object.
//To do so

const xhr = new XMLHttpRequest(); // this will instantiate XMLHTTPReuquest via its constructor to xhr variable
console.log(typeof xhr); // will print the xhr type which is object to console of webpage
console.log(xhr); // will print the xhr object to web page console.

/* xhr has methods which are helpful in making http request and handling the calls like readyStateChange, onload, onerror etc */
const url = "https://api.github.com/users/sharmajiDeepak"; // URL of server
console.log(xhr.readyState)

// to set URL end point which we want xhr to communicate with and type of communication method
// like GET/POST/PUT are set using open method.

xhr.open("GET", url); 

/**When xhr request is open, to let it status know, we have something called Readystatus which tells the state or status of our request.
 * 0 - unsent (before open)
 * 1 - Open (after open)
 * 2- Headers Recieved (send has been called)
 * 3- Loading (In progress, downloading/fetching data from server in response)
 * 4 - Done (Request Complete after send)
 */

console.log(xhr.readyState)

xhr.send(); //send the request to server. If we are using POST method, we can send data using send like xhr.send(body).

// To get the response, we can make use of event called onReadystatechange

xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    if (xhr.readyState === XMLHttpRequest.DONE) { // checking if request is completed
        const data = JSON.parse(xhr.response); //response was returned in string. So, to parse it in JSON used JSON.parse method
        console.log("response", data.login);
    }
}; // this accepts a callback function which will be called whenever xhr readystate change