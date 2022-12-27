/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
 let ss = s.toLowerCase().replace(/[!@#$%^&*?()":;{}\[\],._'\<\>\`\-\ ]/g,'')
 console.log(ss);
 for(let i=0,j=ss.length-1; i<=j;i++,j--) {
  console.log(ss[i],ss[j],i,j);
    if(ss[i] !== ss[j]) return false
 }
 return true
};
// @lc code=end

