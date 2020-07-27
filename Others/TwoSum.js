/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */
var twoSum = function(nums, target) {
  // dummy variables to hold information
  var num1;
  var num2;
  // iterate through array to allow checking of possible sums of different combinations of two numbers


  // pick out the first number;
  for (let i = 0; i < nums.length; i++) {
    num1 = nums[i];
    // pick out the second number;
    for (let j = 0; j < nums.length; j++) {
      // we don't want to sum the same number so we can't let the indices be counted twice.
      if (j !== i) {
        num2 = nums[j];

        // since there will always be one solution I don't have to check for all possibilities
        // if the sums of two numbers matches the target return the indices in an array format
        if (num1 + num2 === target) {
          return [i, j];
        } 
      }
    }
  }
};