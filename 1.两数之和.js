/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // let result = []
  let map = new Map();
  for(let i=0;i<nums.length;i++) {
    // result[0] = nums[i]
    if(map.get(nums[i]) ===undefined)
   map.set(target-nums[i],i)
   else {
    return [map.get(nums[i]),i]
   }
  }
};

// @lc code=end

