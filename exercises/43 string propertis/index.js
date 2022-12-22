//Exercise 43 string propertis

// my code

const person = {
    name: 'ygor',
    age: 20,
    height: 160,
    likes: 'car'
}

showProperties(person)

// Method 1
function showProperties(obj){
    for (const key in obj) {
        if (typeof(obj[key]) === 'string' ) {
            console.log(obj[key]);
        }
    }
}    


// Instructor's code

function showPropertiesInstructor(obj){
    for (const key in obj) 
        if (typeof(obj[key]) === 'string' ) 
            console.log(key,obj[key]);
        
}    
