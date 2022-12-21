import { Node } from "../common/types";
import getRange from "./getRange";

function printRange(root: Node | null, left: number, right: number) {
  const numbers = getRange(root, left, right);

  console.log(numbers.join("\n"));
}
