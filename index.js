function getIntersectionNode(headA, headB) {
  let currA = headA;
  let currB = headB;
  while (currA !== currB) {
    currA = currA ? currA.next : headB;
    currB = currB ? currB.next : headA;
  }
  return currA;
}
