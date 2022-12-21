import { Node } from "../common/types";
import isBinaryTree from "./isBinarySearchTree";

export default function solution(root: Node): boolean {
  return isBinaryTree(root);
}
