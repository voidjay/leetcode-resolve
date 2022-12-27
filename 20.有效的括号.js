/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr = []
  for(let i in s) {
    switch(true) {
      case  s[i] === '(' || s[i] === '[' || s[i] === '{':
        arr.push(s[i])
        break;
      case s[i] === ')':
        if(arr.length > 0 && arr[arr.length -1] === '(')arr.pop()
        else return false
        break;
      case s[i] === '}':
        if(arr.length > 0 && arr[arr.length -1] === '{')arr.pop()
        else return false
        break;
      case s[i] === ']':
        if(arr.length > 0 && arr[arr.length -1] === '[') arr.pop()
        else return false
        break;
    }
  }
  if(arr.length === 0) return true
  else return false
};
// @lc code=end

