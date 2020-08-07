/**
 * The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

 * Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
 */



function sym() {
  // Hint 1: The arguments object is Array-like object that only inherits Array.length property. Hence consider converting it to an actual Array.

  // Hint 2: Deem writing a helper function that returns the symmetric difference of two arrays on each call instead of attempting to difference all sets simultaneously.

  // Hint 3: Apply helper function against the created arguments array reducing its elements pairwise recursively to form the expected output.
  
  let args = []
  // go through every array in arguments and add it to args
  for (let i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  const arrayDiff = (arr1, arr2) => {
    let result = [];

    // check if if the first array 
    arr1.forEach((item) => {
      // if index of the item is < 0 (AKA -1) means the arrays do not contain the item
      if(arr2.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    })
    arr2.forEach((item) => {
      // if index of the item is < 0 (AKA -1) means the arrays do not contain the item
      if(arr1.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    })

    return result;
  }

  // Looked up this part.
  return args.reduce(arrayDiff);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5]));
