/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr,target) {
  let left = 0,right = arr.length-1;
  let middle = Math.floor((left+right) /2)
  while(left<right) {
     middle = Math.floor((left+right) /2)
     console.log(middle);
 if(arr[middle] <target) {
      left = middle + 1
    } else {
      right = middle -1
    }
  }
  return target>arr[left]?left+1:left
}
var searchInsert = function(nums, target) {
  return search(nums,target)
};
// searchInsert([1,3,5,6])
// @lc code=end

