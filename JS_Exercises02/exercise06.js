//Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

function sumOfAllArrayElement(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let numArray = [1,2,3,4,5,6];
console.log(sumOfAllArrayElement(numArray));
