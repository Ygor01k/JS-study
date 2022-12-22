//Exercise 45 grade

// my code
const marks = [100,0,0];
console.log(calculateGrade(marks))

// Method 1
function calculateGrade(marks){
    const b = 89;
    const c = 79;
    const d = 69;
    const f = 59;
   
    let sum = 0;
    let counter = 0;

    for(let value of marks){
        sum += value;
        counter++
    }
    
    let average = sum/counter; 

    if(average <= f) return 'F';
    if(average <= d) return 'F';
    if(average <= c) return 'F';
    if(average <= b) return 'F';
    if(average > b) return 'F';
           

    
}


// Instructor's code


