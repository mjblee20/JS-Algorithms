let selectionSort = (inputArr) => {
  // let sorted = [];
  for (let i = 0; i < inputArr.length; i++) {
    // Assumes the first element tested to be the smallest;
    let min = inputArr[i];
    let minIndex = i;
    // Loop through the unsorted part of the array
    for (let j = i; j < inputArr.length; j++) {
      // if a smaller number exists
      if (inputArr[j] < min) {
        min = inputArr[j];
        minIndex = j;
      }
    }
    // after looping swap the min number with the first index of the array
    // swap the indices of the previous min with current min
    let tmp = inputArr[i];
    inputArr[i] = min;
    inputArr[minIndex] = tmp;
        
    // console.log(inputArr);
  }
  
  return inputArr;
};

console.time('selectionSort');
selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.timeEnd('selectionSort');
