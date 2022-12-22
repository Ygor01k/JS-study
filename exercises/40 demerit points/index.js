//Exercise 40 Demerit Points

// my code
console.log(checkspeed(120));
checkspeedInstructor(120);

// Method 1
function checkspeed(speed){
    const speedLimit = 70;
    const suspendPoint = 12;
    const pointKm = 5;

    let status;
    if(typeof(speed) !== 'number')
        return NaN;
    
    const point =  Math.floor(speed-speedLimit) / pointKm;
    
    if(point <= 0)status = 'ok';     
    else if(point >= suspendPoint)
        status = 'License Suspended';
    else status = 'Points: '+ point;    
    
    return status;    
}

// Instructor's code

function checkspeedInstructor(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    
    if(speed<speedLimit + kmPerPoint){
        console.log('ok');
        return;
    }
    
    const points =  Math.floor(speed-speedLimit) / kmPerPoint;
    if(points >= 12)
        console.log('License Suspended');
    else 
        console.log('Points: ',points);    
}