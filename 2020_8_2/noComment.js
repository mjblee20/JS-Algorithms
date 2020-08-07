function updateInventory(arr1, arr2) {
  arr2.forEach((newItem, newIndex) => {
    arr1.forEach((oldItem) => {
      if(oldItem[1] === newItem[1]) {
        oldItem[0] += newItem[0];
        arr2.splice(newIndex, 1);
      }
    });
  });

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