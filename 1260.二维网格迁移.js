/*
 * @lc app=leetcode.cn id=1260 lang=javascript
 *
 * [1260] 二维网格迁移
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  let arr = []
  grid.forEach(item1 => {
    arr = arr.concat(item1)
  })
  let res= []
  let i = grid.length,j = grid[0].length
  k = k % (i*j)
  arr = [...arr.slice(-k),...arr.slice(0,-k)]


  res = new Array(i).fill([])
  for(let x in res) {
    res[x] = arr.splice(0,j)
  }
  return res
};
shiftGrid([[1,2,3],[4,5,6],[7,8,9]],1)
// @lc code=end

