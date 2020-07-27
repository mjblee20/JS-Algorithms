/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  var num = 0;
  var longest = 0;
  var chars = []
  for (var i = 0; i < s.length; i++) {
      if (chars.indexOf(s.charAt(i)) === -1) {
          num++;
          longest = num;
          chars.push(s.charAt(i));
      } else {
          num = 0;
          chars = [];
      }
  }
  return longest;
};