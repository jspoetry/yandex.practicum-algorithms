import { Node } from "../common/types";
import addNode from "./addNode";

function insert(root: Node | null, key: number) {
  return addNode(root, key);
}
