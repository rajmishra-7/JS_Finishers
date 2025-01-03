//Write a program that takes a string and prints out the number of vowels in the string.

function countVowels(str){
    const vowels = ['a','e','i','o','u'];
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    console.log(count);
    
}

countVowels("finishers");