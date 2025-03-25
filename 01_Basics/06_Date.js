/* Chapter - 06 Date and Time in Javascript */

//Date is of Object type

const currentDate = new Date();
console.log(typeof currentDate); // object
console.log(currentDate); // return the current date and time

//Date To methods
console.log(currentDate.toDateString()); //Return Date as string value // Tue Mar 25 2025
console.log(currentDate.toISOString()); //Return Date as ISO format value // 2025-03-25T12:03:20.037z
console.log(currentDate.toJSON()); //Return Date in JSON format value // 2025-03-25T12:03:20.037z
console.log(currentDate.toLocaleDateString("en-IN")); //Return Date value as per Locale // 25/3/2025 (dd/mm/yyyy)
console.log(currentDate.toLocaleDateString("en-US")); // 3/25/2025 (mm/dd/yyyy)
console.log(currentDate.toLocaleString()); // Return Date and time value as per locale from system
console.log(currentDate.toLocaleString("en-IN")); // Return Date and time value as per locale from system
console.log(currentDate.toLocaleTimeString()); // Return time value as per locale from system
console.log(currentDate.toString()); // Return current date time value from system

//Date Other Methods
console.log(currentDate.getUTCDate()); // Return date
console.log(currentDate.getTime()); //Return time in ms
console.log(currentDate.getFullYear()); //Return from year //2025

console.log(Date.now()); // Returns same time as getTime
console.log(new Date("2025-03-25")); // Returns Date
console.log(new Date(2025, 3, 25)); // Returns Date