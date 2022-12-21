//Exercise 38 Landscape or Portrait

// my code
console.log(isLandscape(50,35));

// Method 1
function isLandscape(width, height){
    return (width > height) ? true : false;
}


// Instructor's code

console.log(isLandscape(300,600));

// Method 1
function isLandscape(width, height){
    return (width > height);
}
