/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 var merLists = function(l1, l2,newList) {
  var mergedHead = { val : -1, next : null },
        crt = mergedHead;
  while(l1&& l2) {
    if(l1.val > l2.val) {
      crt.next = l2
      l2 = l2.next 
    } else {
      crt.next = l1
      l1 = l1.next 
    }
    crt = crt.next
  }
  crt.next = l1 || l2;
  return mergedHead.next
};
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  return merLists(list1,list2)
  // console.log(list1, list2);
  // if(list1 === null) return list2
  // else if(list2 === null) return list1
  // else if(list1.val < list2.val) {
  //   list1.next = mergeTwoLists(list1.next, list2)
  //   return list1
  // } else {
  //   list2.next = mergeTwoLists(list1, list2.next)
  //   return list2
  // }
  // }
};
// @lc code=end

