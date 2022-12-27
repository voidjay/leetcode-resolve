/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
  let map = new Map()
  candyType.forEach(item => {
    map.set(item,true)
  })
  let count = candyType.length / 2
  return Math.min(count,map.size)
};
// @lc code=end

