//Exercise 41 Even and Odd Numbers

// my code
showNumbers(10)
showNumbersInstructor(11)
// Method 1
function showNumbers(limit){
    for(i = 0; i <= limit; i++){
        if(i % 2 === 0)
            console.log(i, 'EVEN');
        else
        console.log(i,'ODD');
    }

}


// Instructor's code

function showNumbersInstructor(limit){
    for(i = 0; i <= limit; i++){
       const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
       console.log(i,message);
    }

}