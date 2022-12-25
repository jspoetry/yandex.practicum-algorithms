import { Node } from "../common/types";

export default function isBinaryTree(
  root: Node | null,
  floor?: number,
  ceil?: number
): boolean {
  if (!root) {
    // console.log("Have not the root");
    return true;
  }

  // console.log( `Process the node with value ${root?.value}, floor: ${floor}, ceil: ${ceil}`);

  if (ceil && root.value >= ceil) {
    // console.log(`The tree with value ${root.value} more than ceil ${ceil}`);
    return false;
  }

  if (floor && root.value <= floor) {
    // console.log(`The tree with value ${root.value} less than floor ${ceil}`);
    return false;
  }

  if (root.left && root.left.value >= root.value) {
    // console.log( `The left subtree ${root.left.value} more than root value ${root.value}`);
    return false;
  }

  if (root.right && root.right.value <= root.value) {
    // console.log( `The right subtree ${root.right.value} lower than root value ${root.value}`);
    return false;
  }

  return (
    isBinaryTree(root.left, floor, ceil || root.value) &&
    isBinaryTree(root.right, floor || root.value, ceil)
  );
}
