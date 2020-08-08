//  It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.


// NOTE: large number will be move to the end first.
function myBubbleSort(arr) {
  let toBeSorted = arr;
  let result = [];
  const sort = (array) => {
    // if there is more than one element in the toBeSorted array, more sorting is required.
    if (array.length > 1) {
      // iterate through the array
      for (let i = 0; i < toBeSorted.length - 1; i++) {
        // if [i] > [i+1] then move the larger number to the end of the array
        if (toBeSorted[i] > toBeSorted[i+1]) {
          let tmp = toBeSorted[i];
          toBeSorted[i] = toBeSorted[i+1];
          toBeSorted[i+1] = tmp;
        }
        // console.log("SORTING: ", toBeSorted);
      }
      // remove the largest number from the toBeSorted array, which is at the end therefore using .pop()
      // add adding the popped number to the front of the array because the numbers added later are all smaller than the one added before. Therefore using .unshift()
      result.unshift(toBeSorted.pop());
      // console.log("SORT ROUND COMPLETED: ", toBeSorted);
      // console.log("SORTED: ", result);
      sort(toBeSorted);
    } 
    // when there's only one left, that is the smallest element so just add that number to the front of 
    else {
      result.unshift(toBeSorted[0]);
    }
  }
  sort(toBeSorted);
  console.log("FINISHED: ", result);
  return result;
}
// console.time('myBubbleSort');
// myBubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 4, 5, 6, 2, 4, 5, 34, 24, 234, 52435, 2345, 3452345, 345, 345,234, 34562, 62463, 36, 36646, 64352, 3453, 365, 3453, 76, 45, 568, 4683, 567, 5683, 765, 83, 90, 32]);
// console.timeEnd('myBubbleSort');


// BETTER BubbleSort
let bubbleSort2 = (inputArr) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
          if (inputArr[j] > inputArr[j + 1]) {
              let tmp = inputArr[j];
              inputArr[j] = inputArr[j + 1];
              inputArr[j + 1] = tmp;
          }
      }
      console.log(inputArr);
  }
  return inputArr;
};
console.time('bubbleSort2');
bubbleSort2([1, 4, 2, 8, 345, 123, 43, 32]); //, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 4, 5, 6, 2, 4, 5, 34, 24, 234, 52435, 2345, 3452345, 345, 345,234, 34562, 62463, 36, 36646, 64352, 3453, 365, 3453, 76, 45, 568, 4683, 567, 5683, 765, 83, 90, 32
console.timeEnd('bubbleSort2');

// FASTEST
let bubbleSort3 = (inputArr) => {
  let len = inputArr.length;
  let swapped;
  do {
      swapped = false;
      for (let i = 0; i < len; i++) {
          if (inputArr[i] > inputArr[i + 1]) {
              let tmp = inputArr[i];
              inputArr[i] = inputArr[i + 1];
              inputArr[i + 1] = tmp;
              swapped = true;
          }
      }
  } while (swapped);
  return inputArr;
};
// console.time('bubbleSort3');
// bubbleSort3([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92, 4, 5, 6, 2, 4, 5, 34, 24, 234, 52435, 2345, 3452345, 345, 345,234, 34562, 62463, 36, 36646, 64352, 3453, 365, 3453, 76, 45, 568, 4683, 567, 5683, 765, 83, 90, 32]);
// console.timeEnd('bubbleSort3');