//Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.

function sumEvenNumbers(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2===0) sum += arr[i];
    }
    console.log(sum);
    
}

let numArray = [1,2,3,4,5,6,7,8,9]

sumEvenNumbers(numArray);