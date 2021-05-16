/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'

*/

const bracketCombination = ['()', '()[]{}', '(]', '([)]', '{[]}'];

// TEST CASES
let array1 = '([)]';
let array2 = '{}';
let array3 = '([)]';

const mySolution = bracketCombination => {
  let stack = [];
  let matching = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  // console.log(bracketCombination.length)
  if (bracketCombination.length === 1) {
    return false;
  }

  for (let i = 0; i < bracketCombination.length; i++) {
    console.log(i);
    if (
      bracketCombination[i] === '(' ||
      bracketCombination[i] === '{' ||
      bracketCombination[i] === '['
    ) {
      stack.push(bracketCombination[i]);
      console.log(stack);
    } else if (
      stack.length !== 0 &&
      matching[bracketCombination[i]] === stack[stack.length - 1]
    ) {
      // console.log(stack[stack.length - 1])
      stack.pop();
    } else {
      console.log(stack);
      return false;
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(mySolution(array3));
