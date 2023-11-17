// Difference between Dot operator and Bracket


// No, when you're dynamically accessing object properties based on a variable, you should use square bracket notation (obj[checkProp]). The dot notation is used when you know the exact property name at the time of coding, but in this case, you want to use the value of the checkProp variable.

function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)){
      const propertyValue = obj[checkProp];
      return propertyValue;
    }else{
      return "Not Found";
    }
    // Only change code above this line
  }``