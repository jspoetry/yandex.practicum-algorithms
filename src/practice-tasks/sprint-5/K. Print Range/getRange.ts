import { Node } from "../common/types";

export default function getRange(
  root: Node | null,
  left: number,
  right: number,
  numbers: number[] = []
): number[] {
  if (!root) {
    return numbers;
  }

  if (root.value >= left) {
    getRange(root.left, left, right, numbers);
  }

  if (root.value >= left && root.value <= right) {
    numbers.push(root.value);
  }

  if (root.value <= right) {
    getRange(root.right, left, right, numbers);
  }

  return numbers;
}
