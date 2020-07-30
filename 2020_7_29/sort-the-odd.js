/**
 * You have an array of numbers.
 * Your task is to sort ascending odd numbers but even numbers must be on their
 * places.
 * 
 * Zero isn't an odd number and you don't need to move it. If you have an empty
 * array, you need to return it.
 */


function sortArray(array) {

  // result array
  let result = []

  // filter the array of odd numbers
  // since 0 is a faulty number and positive numbers are truthy, below line creates a new array with only odd numbers
  let oddNum = array.filter(num => num % 2)
  // This sorts the odd numbers in the array in an ascending order
  let sortedOdd = oddNum.sort((a, b) => a - b)
  // keeps track of which odd number has been added in the sorted odd array
  let oddTracker = 0;
  // iterate through array
  for (let i = 0; i < array.length; i++) {
    // if odd, push number from sortedOdd to result
    if(array[i] % 2) {
      result.push(sortedOdd[oddTracker]);
      oddTracker++;
    } 
    // if even, push original array number to result
    else {
      result.push(array[i])
    }
  }
  
  // Return a sorted array.
  return result;
}

sortArray([5, 3, 2, 8, 1, 4]);
sortArray([5, 3, 1, 8, 0]);