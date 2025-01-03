//Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
//For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
//Hint: You may need to use nested loops and conditional statements to solve this problem.

let arr1 = [1,2,3,4,5];
let arr2 = [8,3,9,5,2];
let common = [];

function getCommonElements(arr1, arr2) {
    for (let index = 0; index < arr1.length; index++) {
        if (arr2.includes(arr1[index])) {
            if (common.includes(arr1[index])) {
                continue;
            }else common.push(arr1[index]);
        }
        
    }
    common.sort();
    console.log(common);
    
}

getCommonElements(arr1,arr2);