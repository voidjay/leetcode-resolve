/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0
  let recentVal = undefined
  while(i<=nums.length) {
    console.log(recentVal)
    if(recentVal !== nums[i]) {
      i+=1;
      recentVal = nums[i]
    }else {
      nums.splice(i,1)
      console.log(nums);
    }
  }
  return nums.length
};
// @lc code=end

