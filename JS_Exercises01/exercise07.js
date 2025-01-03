//Write a program that takes a number and prints the multiplication table for that number.

function printMultiplicationTable(num){
    for (let index = 1; index <= 10; index++){
        console.log(`${num} X ${index} = ${num*index}`);
    }
}

printMultiplicationTable(7);