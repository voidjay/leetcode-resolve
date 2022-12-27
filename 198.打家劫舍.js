/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function robFn (nums,sum) {
  // if(nums.length === 1) return sum
  // else if(nums.length === 1) return nums[0]+sum
  // else {
  //   if(nums[0]>nums[1]) {
  //     console.log(nums[0]);
  //     return robFn(nums.slice(1),sum + nums[0])
  //   } else {
  //     console.log(nums[1]);
  //     return robFn(nums.slice(2),sum + nums[1])
  //   }
  // }
}
var rob = function(nums) {
  if(nums.length === 1) {
    return nums
  }
  if(nums.length === 2) {
    return Math.max(nums[0],nums[1])
  }
  let dp = [nums[0], Math.max(nums[0],nums[1])]
  
  // return robFn(nums,0)
  for(let i = 2;i< nums.length;i++) {
    dp[i] = Math.max(dp[i-1],nums[i] + dp[i-2])
  }
  console.log(dp);
  return dp.slice(-1)
};
// @lc code=end

