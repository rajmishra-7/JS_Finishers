//Write a function that takes an array of objects and returns an array of all the values of a specified property name.

function getProperty(arr, property){
    let result = arr.map(obj => obj[property]);
    return result;
}

let objArray = [
    {id : 1, name: "abc", age: 18},
    {id : 2, name: "def", age: 22},
    {id : 3, name: "ghi", age: 24}
]

let resultArray = getProperty(objArray, "age");

console.log(resultArray);
