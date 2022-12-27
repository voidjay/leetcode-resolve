/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let isChange = false
  let isValid = true
  // let minVal = nums[0]
  let newNum = nums.map((v,index) => {
    if(v-nums[index+1] > 0 ) {
      if(!isChange){
      isChange = true
      if((nums[index+1] === undefined ? Number.MAX_SAFE_INTEGER:nums[index+1])>=(nums[index-1] ===undefined? Number.MIN_SAFE_INTEGER:nums[index-1]))
      v = nums[index+1]
      else {
        nums[index+1] = v
      }
      // minVal = be
    }
      else {
        isValid = false
      }
    }
    return v
  })
  newNum.reduce((be,af) => {
    if(be-af > 0) {
      isValid = false
    }
    return af
  })
  return isValid
};
console.log(checkPossibility([1,2,0,3,4,5,6,7,8,9]));
// @lc code=end

