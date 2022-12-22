//Exercise 44 sum of multiple 3 and 5

// my code
console.log(sum(5));
// Method 1

function sum(limit){
    let result = 0

    for(i = 0; i <= limit; i++)
        if(i % 3 === 0 || i % 5 === 0)
            result += i;
    
    return result;
}


// Instructor's code

function sum(limit){
    let sum = 0

    for(i = 0; i <= limit; i++)
        if(i % 3 === 0 || i % 5 === 0)
            sum += i;
    
    return sum;
}

