import { Node } from "../../../practice-tasks/sprint-5/common/types";
import { removeNodeRecursive } from "./removeNodeRecursive";

function remove(root: Node, key: number) {
  return removeNodeRecursive(root, key);
}
