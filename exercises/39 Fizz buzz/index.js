//Exercise 39 FizzBuzz

// my code

console.log(fizzBuzz2(true))

// Method 1
function fizzBuzz(input){
    if (typeof input !== 'number') 
        return 'Not a Number'
    if(input % 5 === 0 && input % 3 === 0)
        return "FizzBuzz"
    if(input % 3 === 0)
        return "Fizz"
    if(input % 5 === 0)
        return "Buzz"
    return input;
}

// Method 2
function fizzBuzz2(input){
    let resposta = '';
    if (typeof input === 'number'){ 
        if(input % 3 === 0)
            resposta = "Fizz";
        if(input % 5 === 0)
            resposta += "Buzz";
        else if(input % 3 !== 0)
            resposta = input;
    }
    else return 'Not a Number';
    return resposta;
}

// Instructor's code

// Method 1
function fizzBuzzInstructor(input){
    if (typeof input !== 'number') 
        return NaN
    if(input % 5 === 0 && input % 3 === 0)
        return "FizzBuzz"
    if(input % 3 === 0)
        return "Fizz"
    if(input % 5 === 0)
        return "Buzz"
    return input;
}