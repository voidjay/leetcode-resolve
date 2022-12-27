/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0
  let res = nums[0]
  nums.forEach(item => {
    if(sum <=0) sum = item
    else sum+=item
    res = Math.max(sum,res)

  })
  return res
};
// @lc code=end

