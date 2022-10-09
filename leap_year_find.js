//কোনো সাল leap year কিনা তা বের করা

function isLeapyear(year){
    if( (year % 400===0) || (year % 4 === 0 && (year % 100 != 0))){
        document.write(`${year} is a leap year`);
    } else  document.write(`${year} is not a leap year`);
    
   }

   isLeapyear(2024);
