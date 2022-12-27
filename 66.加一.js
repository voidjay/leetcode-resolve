/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let sit = digits[digits.length - 1]
  if(sit <9) {
    digits[digits.length - 1] +=1
    return digits
  } else {
    if(digits.length == 1) digits.unshift(0)
    return [...plusOne(digits.slice(0,digits.length - 1)),0]
  }
};
// @lc code=end

