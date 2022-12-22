//Exercise 42 count truthy

// my code
let truthy = [0,1,'','e',null,2];
console.log(countTruthy(truthy));

// Method 1
function countTruthy(array){
    let counter = 0
    for(let truth of array){
        if(truth)
        counter++;
    }
    return counter;
}

// Instructor's code

function countTruthyInstructor(array){
    let counter = 0
    for(let value of array){
        if(value)
        counter++;
    }
    return counter;
}