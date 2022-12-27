/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  let eqalMap = new Map()
  let count = 0
  dominoes.forEach(item => {
    // console.log(eqalMap);
    let key
    if(item[0]>item [1]){
       key = item[1]*10 + item[0]
    } else {
      key = item[0]*10 + item[1]
    }
    eqalMap.set(key,eqalMap.get(key)+1 || 0)

  })
  for(let i of eqalMap) {
    count += i[1] * (i[1] +1) /2
  }
  return count
};
// console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]]));
// @lc code=end

