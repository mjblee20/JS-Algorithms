/**
 * Count the number of Duplicates
 * Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digit
 * that occur more than once in the input string. The input string can be assumed to contain only alphabets (both
 * uppercase and lowercase) and numeric digits.
 * 
 * Example
 * "abcde" -> 0 # no characters repeats more than once
 * "aabbcde" -> 2 # 'a' and 'b'
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * "indivisibility" -> 1 # 'i' occurs six times
 * "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * "aA11" -> 2 # 'a' and '1'
 * "ABBA" -> 2 # 'A' and 'B' each occur twice
 */

 /**
  * 
  * @param {String} text 
  */

  // TODO: Complete this problem
function duplicateCount(text){
  // first set all letters to lower case since case does not matter
  const lowercase = text.toLowerCase();
  // this will be the result count
  const count = 0;
  // this will be the 
  var chars = {a: 0, b: 0, }
  // loop through all the letters
  lowercase.split('').map(char => {
    // if letter has already appeared before
    if (chars.hasOwnProperty(char)) {
      // add char count by 1
    } 
    // if it's first appearance of the letter
    else {
      // add key as char 
      
    }
  })
  // if letter is already in the chars array, then add 1 to that key
  // read only alpha-numeric digits

  // return the number of repeated characters in the string
  return chars.length;
}

console.log('abcde', duplicateCount('abcde'));
console.log('aabbcde', duplicateCount('aabbcde'));
console.log('aabBcde', duplicateCount('aabBcde'));
console.log('indivisibility', duplicateCount('indivisibility'));
console.log('Indivisibilities', duplicateCount('Indivisibilities'));
console.log('aA11', duplicateCount('aA11'));
console.log('ABBA', duplicateCount('ABBA'));

