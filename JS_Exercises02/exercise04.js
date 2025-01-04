//Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.

function createCounter() {
    let count = 0;
    const incrementCount = () => {
        count++;
        return count;
    }
    return incrementCount;
}

const counter = createCounter();
console.log(counter());//count 1
console.log(counter());//count 2
console.log(counter());//count 3


