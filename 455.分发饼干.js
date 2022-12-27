/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let sortg = g.sort((be,af) => be-af)
  let sorts = s.sort((be,af) => be-af)
  let l=0,r=0,recent=0;
  console.log(sortg,sorts);
  for(let i of sorts) {
    if(sortg[l] <=i) {
      l++
    }
  }
  return l
};