/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 function TreeNode(val, left, right) {
       this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
   }
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function banery(nums) {
  let left = 0,right = nums.length -1
  let middle = Math.floor(left + (right -left) /2)
  console.log(nums,nums[middle]);
  if(nums[middle] !== undefined) {
    // return new TreeNode(nums[middle],banery(nums.slice(0,middle),banery(nums.slice(middle+1,right+1))))
    return {
      val:nums[middle],
      left:banery(nums.slice(0,middle)),
      right:banery(nums.slice(middle+1,right+1))
    }
  } else {
    return null
  }
}
var sortedArrayToBST = function(nums) {
  return banery(nums)
};
// @lc code=end

