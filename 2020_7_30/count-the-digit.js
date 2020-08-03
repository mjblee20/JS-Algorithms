/**
 * Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
 */

function nbDig(n, d) {

  let count = 0;
  // square all numbers between 0 and n
  for (let i = 0; i <= n; i++) {
    // get the squared number
    let squared = i ** 2;
    // split the squared number into array of integers
    let test = squared.toString().split('');
    // check if the split number includes the digit of interest
    if (test.filter(num => num === d.toString())) {
      // check the number of times that digit has appeared in that number and add it to the count
      count += test.filter(num => num === d.toString()).length
    }
  }
  return count;
}

nbDig(25, 1) //4700
nbDig(5750, 0) //4700
nbDig(11011, 2) //9481
nbDig(12224, 8) //7733
nbDig(11549, 1) //11905