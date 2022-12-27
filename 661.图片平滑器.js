/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
  let xlength = img.length,ylength = img[0].length
  let res = new Array(xlength).fill([])
  for(let i in res) {
    res[i] = new Array(ylength).fill([])
    for(let j in res[i]) {
      res[i][j] = calcArr(img,+i,+j)
    }
  }
  function calcArr(img,x,y) {
    let count = 0,total = 0;
    for(let i = Math.max(x-1,0);i<Math.min(x+2,img.length);i++) {
      for(let j = Math.max(y-1,0);j<Math.min(y+2,img[0].length);j++) {
          total+=img[i][j]
          count+=1
      }
    }
    let res = Math.floor(total/count)
    return res
  }
  console.log(res);
  return res
};
imageSmoother([[1,1,1],[1,0,1],[1,1,1]])
// @lc code=end

