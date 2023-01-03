import { Node } from "../../../practice-tasks/sprint-5/common/types";

const findMostRightNode = (root: Node, parent: Node): Node => {
  if (!root.right) {
    if (parent.left !== root) {
      parent.right = root.left;
    }

    return root;
  }

  return findMostRightNode(root.right, root);
};

export function removeNodeRecursive(
  root: Node | null,
  key: number,
  parent: Node | null = null
): Node | null {
  if (!root) {
    return null;
  }

  if (root.value === key) {
    let candidateNode: Node | null = null;

    if (root.left && root.right) {
      const mostRightNode = findMostRightNode(root.left, root);
      if (mostRightNode !== root.left) {
        mostRightNode.left = root.left;
      }
      mostRightNode.right = root.right;
      candidateNode = mostRightNode;
    }

    if (!root.left || !root.right) {
      candidateNode = root.left || root.right;
    }

    if (!parent) {
      return candidateNode;
    }

    const parentBranch = root.value < parent.value ? "left" : "right";

    parent[parentBranch] = candidateNode;
  }

  if (root.value < key) {
    removeNodeRecursive(root.right, key, root);
  }

  if (root.value > key) {
    removeNodeRecursive(root.left, key, root);
  }

  return root;
}
