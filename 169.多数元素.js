/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let map = new Map()
  let res = nums[0]
  nums.forEach(item => {
    if(!map.has(item)) {
      map.set(item,1)
    } else {
      map.set(item,map.get(item)+1)
      if(map.get(item) > Math.floor(nums.length/2)) res = item
    }
  })
  return res
//  let sortnums = nums.sort((a,b) => a-b)
//  return sortnums[Math.floor(nums.length/2)]
};
// @lc code=end

