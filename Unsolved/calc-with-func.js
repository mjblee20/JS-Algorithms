/**
 * This time we want to write calculations using functions and get the results. Let's have a look at some examples:

  seven(times(five())); // must return 35
  four(plus(nine())); // must return 13
  eight(minus(three())); // must return 5
  six(dividedBy(two())); // must return 3

 * Requirements:

 * There must be a function for each number from 0 ("zero") to 9 ("nine")
 * There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
 * Each calculation consist of exactly one operation and two numbers
 * The most outer function represents the left operand, the most inner function represents the right operand
 * Divison should be integer division. For example, this should return 2, not 2.666666...:
 *  eight(dividedBy(three()));
 */

// NOTE: Function composition is the process of applying a function to the output of another function

function calc(operator, num) {
  if (operator) {
    return operator(num);
  } else {
    return num;
  }
}

// these functions check if there is an operator in the function call if there is then call calc function, if not it'll just be a number
function zero(func) { calc(func, 0) }
function one(func) { calc(func, 1) }
function two(func) { calc(func, 2) }
function three(func) { calc(func, 3) }
function four(func) { calc(func, 4) }
function five(func) { calc(func, 5) }
function six(func) { calc(func, 6) }
function seven(func) { calc(func, 7) }
function eight(func) { calc(func, 8) }
function nine(func) { calc(func, 9) }

function plus(num) {}
function minus(num) {}
function times(num) {}
function dividedBy(num) {}