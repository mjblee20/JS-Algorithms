/**
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
 */

 /**
  * 
  * @param {*} arr1 
  * @param {*} arr2 
  */
function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  
  //  Hint 1: You need to work through each item of the new inventory to see if it exists in the current inventory or not. Remember that the product name is stored as the second element of each sub-array: array[0][1] = "item-name".


  // NOTE: arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
  /**
    * @param {*} newItem value of each element in the array
    * @param {*} newIndex the index of the selected array
    * @param {*} newArr the complete array being looped through
    */

  arr2.forEach((newItem, newIndex) => {
    // console.log(`new item: ${newItem}`);
    // console.log(`new index: ${newIndex}`);
    // console.log(`new array: ${newArr}`);
    arr1.forEach((oldItem) => {
      // Hint 2: If the item exists, you need to add the quantity from the new inventory. If the item doesn’t exist, you need to add the entire item.
      if(oldItem[1] === newItem[1]) {
        oldItem[0] += newItem[0];
        // removes the elements that is not a new item
        arr2.splice(newIndex, 1);
      }
    });
  });

  // Hint 3: Return the completed inventory in alphabetical order.
  let solution = [...arr1, ...arr2].sort(function(a, b) {
    if (a[1] < b[1]) {
      return -1;
    } else if (a[1] > b[1]) {
      return 1;
    } else {
      return 0;
    }
  });
  
  return solution;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
