/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  var dummyHead = new ListNode();
  var p = l1;
  var q = l2;
  var curr = dummyHead;
  var carry = 0;
  while (p != null || q != null) {
      // if (p != null) then x = p.val } else { x = 0 }
      var x = (p != null) ? p.val : 0;
      var y = (q != null) ? q.val : 0;
      if (p != null) { 
          p = p.next;
      }
      if (q != null) {
          q = q.next;
      }
      
      var sum = carry + x + y;
      // Javascript auto rounds 0.1 to 1 so I must Math.floor to round down 0.1 to 0
      carry = Math.floor(sum / 10);
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
      
      if (carry > 0) {
          curr.next = new ListNode(carry);
      }
  }
  return dummyHead.next;
};

// export default AddTwoNumbers;