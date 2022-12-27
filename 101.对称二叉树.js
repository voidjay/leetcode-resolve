/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function pachTree(left,right) {
  let isBalance = false
  if(!left && !right) {
    return true
  }else if (!left || !right) {
    return false
  }
  if(left.val === right.val) {
    isBalance = pachTree(left.left,right.right)
    if(isBalance)
    isBalance = pachTree(left.right,right.left)
  } else {
    return false
  }
  return isBalance
}
var isSymmetric = function(root) {
  return pachTree(root.left,root.right)
};
// @lc code=end

