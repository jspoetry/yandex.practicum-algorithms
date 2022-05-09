function solution(head, el) {
  let curIndex = 0;
  let curNode = head;

  while (curNode) {
    if (curNode.value === el) {
      return curIndex;
    }
    curNode = curNode.next;
    curIndex++;
  }

  return -1;
}