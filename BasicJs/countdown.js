// with recursion


// Only change code below this line
function countdown(n){
    if(n<=0){
      return [];
    }else{
      const countArray = countdown(n-1);
      countArray.unshift(n);
      return countArray;
    }
  }
  // Only change code above this line
  
console.log(countdown(5));
  