//Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.

function stringLengthGreaterThan5(arr){
    console.log(arr);
    return arr.filter(str => str.length > 5);
}

let strArray = ["America", "Australia", "Africa", "Europe", "Asia", "Antartica"];
let resultArray = stringLengthGreaterThan5(strArray);
console.log(resultArray);
