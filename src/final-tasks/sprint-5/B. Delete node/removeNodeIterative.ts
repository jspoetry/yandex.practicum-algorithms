import { Node } from "../../../practice-tasks/sprint-5/common/types";

const findMostRightNode = (root: Node, parent: Node): Node => {
  while (root.right) {
    parent = root;
    root = root.right;
  }

  if (parent.left !== root) {
    parent.right = root.left;
  }

  return root;
};

export function removeNodeIterative(root: Node, key: number): Node | null {
  let parent: Node | null = null;
  let node: Node | null = root;

  while (node) {
    if (node.value === key) {
      let candidateNode: Node | null = null;

      if (node.left && node.right) {
        const mostRight = node.left.right
          ? findMostRightNode(node.left.right, node.left)
          : node.left;
        if (mostRight !== node.left) {
          mostRight.left = node.left;
        }
        mostRight.right = node.right;

        candidateNode = mostRight;
      }

      if (!node.left || !node.right) {
        candidateNode = node.left || node.right;
      }

      if (!parent) {
        return candidateNode;
      }

      const parentBranch = node.value < parent.value ? "left" : "right";
      parent[parentBranch] = node.left || node.right;

      node = null;
    }

    if (node) {
      parent = node;
      node = node.value < key ? node.right : node.left;
    }
  }

  return root;
}
