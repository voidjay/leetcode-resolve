/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  let N = nums.length
  let res = Number.MAX_SAFE_INTEGER
  nums.sort((a, b) => a - b)
  for (let i = 0; i < N; i++) {
      let left = i + 1
      let right = N - 1
      while (left < right) {
          let sum = nums[i] + nums[left] + nums[right]
          if (Math.abs(sum - target) < Math.abs(res - target)) {
              res = sum
          }
          if (sum < target) {
              left++
          } else if (sum > target) {
              right--
          } else {
              return sum
          }
      }
  }
  return res
};

console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5],-2));
// console.log(threeSumClosest([-1,2,1,-4],1));
// @lc code=end

