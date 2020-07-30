/**
 * A pangram is a sentence that contains every single letter of the alphabet at
 * least once. For example, the sentence "The quick brown fox jumps over the lazy 
 * dog" is a pangram, because it uses the letters A-Z at least once (case is 
 * irrelevant).
 * 
 * Given a string, detect whether or not it is a pangram. Return True if it is, 
 * False if not. Ignore numbers and punctuation.
 */

function isPangram(string) {
  // create an array of alphabets and pop each alphabet off as they appear
  var alphabets = "abcdefghijklmnopqrstuvwxyz";
  // take string lower case it and split it
  var test = string.toLowerCase();
  // loop through the string
  for (let i = 0; i <= test.length; i++) {
    //If the letter is present in the array, remove it
    if (alphabets.indexOf(test[i]) !== -1) {
        alphabets = alphabets.replace(test[i], '') 
        
    } 
  }

  // if alphabets array has nothing in it then return true
  console.log(alphabets.length === 0);
  return alphabets.length === 0;
}

var string1 = "The quick brown fox jumps over the lazy dog."
isPangram(string1);
var string2 = "This is not a pangram."
isPangram(string2);