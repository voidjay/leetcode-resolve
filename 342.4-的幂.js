/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  let recent = 1
  while(n>=recent) {
    if(n === recent) return true
    else recent = recent *4
  }
  return false
};
// @lc code=end

