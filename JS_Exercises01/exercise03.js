//Write a program that takes two numbers and displays their sum, difference, product, and quotient.

let a = 5, b = 2;

function twoNumberOperations(num1, num2){
    console.log(`sum of ${num1} and ${num2} is ${num1+num2}`);
    console.log(`difference of ${num1} and ${num2} is ${num1-num2}`);
    console.log(`product of ${num1} and ${num2} is ${num1*num2}`);
    console.log(`quoteint of ${num1} and ${num2} is ${num1/num2}`);
}

twoNumberOperations(a,b);