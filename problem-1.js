//how to print rendom number like ludu game...

function getRandomnumber(min,max){
    
    return Math.floor(Math.random() * (max - min + 1) ) + min;
 }
 console.log('random number is:'+getRandomnumber(+1,6));