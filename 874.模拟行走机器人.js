/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  let direct = 's'
  let from =[0,0],distance = 0
  let leftRotate = {
    s:'e',
    e:'n',
    n:'w',
    w: 's'
  }
  let rightRotate = {
    s:'w',
    w:'n',
    n:'e',
    e:'s'
  }
  for(i in commands) {
    switch(commands[i]) {
      case -2:
        direct = rightRotate[direct]
        break;
      case -1:
        direct = leftRotate[direct]
        break;
      default:
        from = step(from,direct,commands[i],obstacles)
        break;
    }
  }

};
var step = function(from,direct,step,obstacles) {
  let x= from[0],y=from[1]
  switch(direct) {
    // 北方
    case 's':
      from = hasObstacles(from,direct,obstacles)
        
      break;
      // 南方
    case 'n':
      break;
      // 西方
      case 'e':
    break;
    // 东方
    case 'w':
    break; 
  }
}
var hasObstacles = function(from,direct,obstacles) {
  let {x,y} = from

  switch(direct) {
    // 北方
    case 's':{
      let obs = obstacles.filter(v => {
        return v[0] === x && v[1]>y && v[1]<y+step
      })
      if(obs.length>0) {
        let obsSteps =  obs.map(item => {
          return item[1]
        })
        let minStep = Math.min(...obsSteps)
        y+=minStep -1
      }
      break;}
      // 南方
    case 'n':{
      let obs = obstacles.filter(v => {
        return v[0] === x && v[1]<y && v[1]>y-step
      })
      if(obs.length>0) {
        let obsSteps =  obs.map(item => {
          return item[1]
        })
        let minStep = Math.min(...obsSteps)
        y+=minStep -1
      }
      break;}
      // 西方
      case 'e':{
        let obs = obstacles.filter(v => {
          return v[0]<x-step && v[0]>x-step && v[1] === y
        })
        if(obs.length>0) {
          let obsSteps =  obs.map(item => {
            return item[1]
          })
          let minStep = Math.min(...obsSteps)
          y+=minStep -1
        }
        break;}
    // 东方
    case 'w':{
      let obs = obstacles.filter(v => {
        return v[0] === x && v[1]>y && v[1]<y+step
      })
      if(obs.length>0) {
        let obsSteps =  obs.map(item => {
          return item[1]
        })
        let minStep = Math.min(...obsSteps)
        y+=minStep -1
      }
      break;}
  }
  return [x,y]
}
// @lc code=end

