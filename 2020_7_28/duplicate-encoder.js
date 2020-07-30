/**
 * The goal of this exercise is to convert a string to a new string where each 
 * character in the new string is "(" if that character appears only once in the 
 * original string, or ")" if that character appears more than once in the 
 * original string. Ignore capitalization when determining if a character is a 
 * duplicate.
 */

function duplicateEncode(word){
  // lowercase word and split
  let test = word.toLowerCase().split('');
  // console.log(test);
  // new string
  let result = ''
  // loop through word
  for (let i = 0; i < test.length; i++) {
    // filter character to see if the character appears more than once
    let duplicate=test.filter(char => char === test[i]);
    // console.log(duplicate);
    // if character appear more than once, new string add )
    if (duplicate.length !== 1) {
      result += ')';
    }
    // if character appear only once, new string add (
    else {
      result += '(';
    }
  }
  // console.log(result);
  return result;
}

duplicateEncode("din");