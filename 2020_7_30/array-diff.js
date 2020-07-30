/**
 * Your goal in this kata is to implement a difference function, which subtracts 
 * one list from another and returns the result.
 * 
 * It should remove all values from list a, which are present in list b.
 * 
 *  arrayDiff([1,2],[1]) == [2]
 * 
 * If a value is present in b, all of its occurrences must be removed from the 
 * other
 * 
 *  arrayDiff([1,2,2,2,3],[2]) == [1,3]
 * 
 */

function arrayDiff(a, b) {
  // result array will start identical to the first array
  // NOTE: include this step because I don't want to mutate the original arrays.
  let result = a;

  // iterate through the second array
  for (let i = 0; i < b.length; i++) {
    // filter out all of the numbers that exists in the first array that is equal to the ones in second array
    // NOTE: using !== here because we want to keep all the numbers that don't match
    result = result.filter(item => item !== b[i]);
  }

  return result;
}