//Write a function that takes an array of objects and returns the object with the highest value for a specified property name.

function findMaxByProperty(arr, prop) {
    // Check if the array is empty
    if (arr.length === 0) {
      return null;
    }
  
    // Initialize maxObj to first object in the array
    let maxObj = arr[0];
  
    // Loop through the array starting at second object
    for (let i = 1; i < arr.length; i++) {
      // Check if the current object's property value is greater than maxObj's property value
      if (arr[i][prop] > maxObj[prop]) {
        // If yes, update maxObj to current object
        maxObj = arr[i];
      }
    }
  
    // Return the object with highest value for the specified property
    return maxObj;
  }

let objArray = [
    {id : 1, name: "abc", age: 18},
    {id : 2, name: "def", age: 22},
    {id : 3, name: "ghi", age: 24}
];

let result = findMaxByProperty(objArray, "age");
console.log(result);
