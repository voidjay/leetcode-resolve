/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let result = []
  let maps = {}
  nums1.forEach(item => {
    maps[item] = true
  })
  nums2.forEach(item => {
    if(maps[item]) {
      result.push(item)
      delete maps[item]
    }
  })
  return result
};
// @lc code=end

