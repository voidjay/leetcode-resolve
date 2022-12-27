/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  let indexArr = [],result = []
for(let i in s) {
  if(s[i] === c) {
    indexArr.push(i)
  }
}
  let recentIndex = 0
  for(let i in s) {
    let distance1 = Math.abs(i-indexArr[recentIndex])
    let distance2 = Math.abs(i-(indexArr[recentIndex+1] || Number.MAX_SAFE_INTEGER))
    if(distance1 < distance2) {
      result.push(distance1)
    } else {
      result.push(distance2)
      recentIndex+=1
    }
  }

return result
};
shortestToChar()
// @lc code=end

