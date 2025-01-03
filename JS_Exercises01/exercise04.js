//Write a function that takes two numbers as arguments and returns the larger number.

function getLargerNumber1(a,b){
    if (a>b) {
        return a;        
    }else return b;
}

function getLargerNumber2(a,b){
    return a > b ? a : b;
}

let num1 = 5, num2 = 2;

console.log(getLargerNumber1(num1,num2));
console.log(getLargerNumber2(num1,num2));

