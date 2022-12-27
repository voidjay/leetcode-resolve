/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let arr = []
  if(root) {
    if(root.left) arr = arr.concat(inorderTraversal(root.left))
    arr.push(root.val)
  
    if(root.right) arr = arr.concat(inorderTraversal(root.right))
  }

  return arr
};
// @lc code=end

