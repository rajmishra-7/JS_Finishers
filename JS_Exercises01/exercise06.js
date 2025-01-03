//Write a program that takes a number and checks whether it is positive, negative, or zero.

function checkNumber(num){
    if(num>0) console.log("positive");
    else if(num<0) console.log("negative");
    else console.log("zero")    
}

checkNumber(5);
checkNumber(-3);
checkNumber(0);