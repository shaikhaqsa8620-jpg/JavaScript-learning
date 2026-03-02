// Step 1: Create the Promise
const fetchData = new Promise((resolve, reject) => {
 setTimeout(() => {
 const success = true;
 if (success) {
 resolve("Data fetched successfully");
 } else {
 reject("Error fetching data");
 }
 }, 3000);
});
// Step 2: Consume the Promise
fetchData.then((data) => {
 console.log(data); // Output: "Data fetched successfully"
 return data.toLowerCase(); // Pass transformed data to
 next.then()
 }).then((value) => {
 console.log(value); // Output: "data fetched successfully"
 }).catch((error) => {
 console.error(error); // Output: "Error fetching data" 
 // (if rejected)
 });
