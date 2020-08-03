/**
 * Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
 */

function descendingOrder(n){
  // convert number to array
  testArr = (""+n).split('');
  // sort array descending order
  testArr.sort((a, b) => b - a);
  // combine and turn array into number
  result = Number(testArr.join(''));
  return result;
}

descendingOrder(123456789);