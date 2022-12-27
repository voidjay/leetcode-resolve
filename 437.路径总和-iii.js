/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * 我的代码
 * @param {*} root 
 * @param {*} targetSum 
 */
// function calcPathNum(arr) {
//   let nums = 0
//   let left=0
//   while(left>=arr.length-1) {
//     let sumArr = arr.splice(left,nums.length-1)
//     if(sumArr.reduce((be,af) => be+af) === n) nums +=1
//     // 移动滑块
//     left++
//   }
// }
// function pathfind() {

// }
// /**
//  * @param {TreeNode} root
//  * @param {number} targetSum
//  * @return {number}
//  */
// var pathSum = function(root, targetSum) {
//   let num = 0

//   let arr = [root.val]
//   let left = root.left,right= root.right
//   while(left || right)
  
// };


var pathSum = function(root, targetSum) {
  let map = {}
  let count = 0
  // if(targetSum === 0 &&root && !root.left && !root.right) return 0
  let dfs = (node,preSum) => {
    // console.log(node);
    if(!node){
      return 0
  }
  map[preSum] = (map[preSum] || 0) + 1
  // if(!map[preSum]) {
  //   map[preSum] = 1
  // }else {
  //   map[preSum] +=1
  // }
     let target=preSum+node.val;
     count += (map[target-targetSum] || 0)

      dfs(node.left,target);
      dfs(node.right,target);
      map[preSum] -=1
  }
  dfs(root,0)
  return count
};

// @lc code=end

