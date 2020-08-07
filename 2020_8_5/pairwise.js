function pairwise(arr, arg) {
  return arr.reduce((acc, index, array) {
    for (let i = index + 1; i < array.length; i++) {
      if ((array[index] + array[i]) === arg) {
        acc += index + i;
        array[index] = array [i] = NaN;
      }
    }
    return acc;
  });
}

pairwise([1,4,2,3,0,5], 7);
