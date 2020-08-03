// Solved but not the best solution

function validBraces(braces){
  // split the string into each brackets
  var list = braces.split('');
  // array.push() adds to the end of array
  // array.pop() removes from end of array
  // Keep track of opening bracket in an array
  var openBrackets = [];

  // Loop through the string of brackets
  for(let i = 0; i <= list.length - 1; i++) {
    // checks for the first character if open bracket push else return false
    if (i === 0) {
      if (list[i] === '(' || list[i] === '{' || list[i] === '[') {
        openBrackets.push(list[i]);
      } else {
        console.log('false');
        return false;
      }
    }    
    // check the rest, since i != 0 it either matches the bracket in the array or it doesn't. if it doesn't check if it's an open bracket 
    else {
    // If encounter open brackets add to array with array.push() adding to the end of array
      if (list[i] === '(' || list[i] === '{' || list[i] === '[') {
        openBrackets.push(list[i]);
      } else {
        // check of the closing bracket matches the most recent open bracket
        if (
            list[i] === ')' && openBrackets[openBrackets.length - 1] === '(' || 
            list[i] === ']' && openBrackets[openBrackets.length - 1] === '[' ||
            list[i] === '}' && openBrackets[openBrackets.length - 1] === '{'
          ) {
          openBrackets.pop();
        } else {
          console.log('false');
          return false;
        }
      }
    }
  }

  // looped through all the characters means everything matched up so return true
  
  // if (openBrackets.length === 0) {
  //   console.log('true');
  //   return true;
  //   // if there is remaining unmatched brackets in the array return false
  // } else {
  //   console.log('false');
  //   return false;
  // }
  
  // Above if else can be simplified into 
  return openBrackets.length === 0;
}

validBraces("(){}[]"); // true
validBraces("([{}])"); // true
validBraces("(}"); // false
validBraces("[(])"); // false
validBraces("[({})](]"); // false
validBraces("{{(({[["); // false
validBraces("}"); // false
