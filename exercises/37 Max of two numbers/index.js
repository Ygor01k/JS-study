// Exercise 37 Max of two numbers
// Write a function that takes two numbers and returns the maximum of the two


// my code

// Method 1
function maximum (a, b){
 if (a > b)
    return a;
 else
    return b;
} 
  
 // Method 2
 function maximum2(a, b){
 let MaxNumber;
 if (a > b)
    MaxNumber = a;
 else
    MaxNumber = b;
  
 return MaxNumber;
}


console.log(maximum2(9,18));


// Instructor's code

let number = max2(3,5);
console.log(number);

// Method 1
function max (a, b) {
    if (a > b) return a;
    return b;
   } 

// Method 2
function max2 (a, b) {
    return (a > b) ? a : b;
   } 








