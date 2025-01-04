//Write a function that takes an object and returns an array of all the keys in the object.

function returnKeys(obj){
    console.log(obj);
    
    return Object.keys(obj);
}

let person = {
    name: "ABC",
    age: 18,
    country: "India",
    id: "1",
    city: "Raipur"
}

let newArr = returnKeys(person);

console.log(newArr);

