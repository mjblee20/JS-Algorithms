/**
 Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

 For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
 */
/**
 * Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

 * For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
 */


function permAlone(str) {
  let count = 0;
  // let perm = [];
  let arr = str.split('');


  // swaping two variables
  const swap = (a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  const generate = (n) => {
    let regex = /([a-z])\1+/;
    // n === 1 here is the base case to prevent infinite loops
    // regex.text(arr.join('')) will return true if there is a repeated adjacent char
    if (n === 1 && !regex.test(arr.join(''))) {
      count++
      console.log(arr.join('')) // this will print out every single permutation
    } else {
      n.forEach((element) => {
        generate(n - 1);
        swap(n % 2 ? 0 : element, n - 1);
      })
    }
    
    generate(arr.length);
  }

  return count;
}

permAlone('aab');
