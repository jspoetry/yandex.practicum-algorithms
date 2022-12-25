import CNode from "../common/CNode";
import { Node } from "../common/types";

export default function addNode(root: Node | null, key: number): Node | null {
  if (!root) {
    return null;
  }

  if (key >= root.value) {
    if (!root.right) {
      root.right = new CNode(key);
    } else {
      addNode(root.right, key);
    }
  } else {
    if (!root.left) {
      root.left = new CNode(key);
    } else {
      addNode(root.left, key);
    }
  }

  return root;
}
