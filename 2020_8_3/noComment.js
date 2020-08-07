function permAlone(str) {
  let count = 0;
  let arr = str.split('');

  const swap = (a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  const generate = (n) => {
    let regex = /([a-z])\1+/;
    if (n === 1 && !regex.test(arr.join(''))) {
      count++
      // console.log(arr.join(''));
    } else {
      for (let i = 0; i !== n; i++) {
        generate(n - 1);
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  }
  
  generate(arr.length);
  return count;
}