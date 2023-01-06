/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = []
  if (nums.length < 3) return res
   nums = nums.sort((a, b) => a - b)


  let map = new Map()
  for(let i=0;i< nums.length-2;i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let left = i+1,right = nums.length - 1
    while(left<right) {
      
      if(nums[i]+nums[left]+nums[right] === 0) {
        console.log(left,right);
        res.push([nums[i],nums[left],nums[right]])
        
        while (nums[left] === nums[left + 1]) left++
				while (nums[right] === nums[right - 1]) right--
        left++
        right--
      } else {
        if(nums[left]+nums[right] + nums[i] < 0) {
          left++
          // right = nums.length - 1
        } else {
          right--
        }
      }
    }
    // if(nums[i] === nums[i+1] )i++
  }
  return res
};
// @lc code=end

