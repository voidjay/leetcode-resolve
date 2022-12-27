/*
 * @lc app=leetcode.cn id=1332 lang=javascript
 *
 * [1332] 删除回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
  if(isCb(s)) {
    return 1
  } else return 2
  // left=0,right = s.length
  // count = 0
  // while(left<s.length) {
  //   if(isCb(s.substring(left,right))) {
  //     left = right
  //     right = s.length
  //     count++
  //   } else {
  //     right--
  //   }
  // }
  function isCb(str) {
    let left =0,right = str.length-1
    while(left<right) {
      if(str[left]!==str[right]) return false
      left++,right--
    }
    // console.log(str);
    return true
  }

  return count
};
// console.log(removePalindromeSub('baabb'));
// @lc code=end

