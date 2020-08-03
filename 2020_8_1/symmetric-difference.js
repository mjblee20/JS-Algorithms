/**
 * The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

 * Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
 */



function sym() {
  // Hint 1: The arguments object is Array-like object that only inherits Array.length property. Hence consider converting it to an actual Array.
  
  // set the starting array to be equivalent to the first one
  let result = []; 

  // go through every array in arguments
  for (let i = 0; i < arguments.length; i++) {
    // iterate the args[] array and check if the result contains the number
    for (let j = 0; j < arguments[i].length; j++) {

      // if result contains arguments[i][j]
      if (result.includes(arguments[i][j])) {
        // remove element at index j which is the one that was included in the args[i] array
        result.splice(result.indexOf(arguments[i][j]), 1);
      } 
      
      // if the args[i] array contains a number that doesn't exist in the result array add it
      else {
        result.push(arguments[i][j]);
      }
    }
  }

  return result;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5]));
