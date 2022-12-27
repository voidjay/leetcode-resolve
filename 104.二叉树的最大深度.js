/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var DFS = (node,deep) => {
  if(node) {
    // if(node.val !==) {
      deep +=1
    // }
    if( node.left && node.right) {
      deep = Math.max(DFS(node.left,deep),DFS(node.right,deep)) 
    } else if(node.right) {
      deep = DFS(node.right,deep)
    } else if(node.left) {
      deep = DFS(node.left,deep)
    }
  }
  return deep
}
var maxDepth = function(root) {
  return DFS(root,0)
};
// @lc code=end

