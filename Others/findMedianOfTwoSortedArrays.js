/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
  // check if even or odd
  var newArr = nums1.concat(nums2).sort(function(a,b){return a-b})
  console.log(newArr);
  var median = 0;
  if (newArr.length % 2 === 0) {
    var middle = newArr.length / 2
    console.log(middle);
    // then add two numbers in the middle then divide by 2
    median = (newArr[middle] + newArr[middle - 1]) / 2
  } else {
    // then pick the middle number
    console.log((Math.floor(newArr.length / 2)));
    median = newArr[(Math.floor(newArr.length / 2))]
  }
  return median;
};

var array1 = [1, 2];
var array2 = [3, 4];
var array3 = [3]
var array4 = [-2,-1]
console.log('Solution', findMedianSortedArrays(array3, array4));