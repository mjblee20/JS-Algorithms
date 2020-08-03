// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  // remove the array of numbers identical to the first element
  // if the length of the array is not 1 then that number isn't what we want
  // by filtering out the first element than we will get the answer we want
  if(arr.filter(num => num === arr[0]).length !== 1) {
    return arr.filter(num => num !== arr[0])[0];
  } 
  // in case the first number is the unique number;
  else {
    return arr[0];
  }
}
