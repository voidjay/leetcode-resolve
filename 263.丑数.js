/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
  if(n === 0) return false
  let nums = [2,3,5]
  let isUglyNum = false
  let i=0
  while(i<nums.length) {
    if(n % nums[i] === 0) {
      n = n / nums[i]
      console.log(n);
      i=0
    } else i++
  }

  if(n === 1) return true
  else return false

};
// @lc code=end

