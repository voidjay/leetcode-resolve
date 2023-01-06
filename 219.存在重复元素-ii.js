/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let hashMap = {}
  for(let index in nums) {
    let item = nums[index]
    if(!hashMap[item]) {
      hashMap[item] = index
    } else {
      if(Math.abs(+index - hashMap[item]) < k || Math.abs(index - hashMap[item]) === k) {
        return true
      } else {
        hashMap[item] = index
      }
    }
  }
  return false
};
// @lc code=end

