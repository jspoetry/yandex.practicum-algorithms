// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

function solution(node, index) {
  let curIndex = 0;
  const head = node;
  let previousNode = null;
  let currentNode = head;

  if (index === 0) return head.next;

  while (index >= curIndex) {
    if (index === curIndex) {
      previousNode.next = currentNode.next
      return head;
    }
    previousNode = currentNode
    currentNode = currentNode.next
    curIndex++;
  }
}


function test() {
  var node3 = new Node("node3");
  var node2 = new Node("node2", node3);
  var node1 = new Node("node1", node2);
  var node0 = new Node("node0", node1);
  console.log(solution(node0, 1));
  /*
  output is:
  node0
  node1
  node2
  node3
  */
}
