//Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

function sumOfAllNumbers(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    console.log(sum);
    
}

sumOfAllNumbers(5);