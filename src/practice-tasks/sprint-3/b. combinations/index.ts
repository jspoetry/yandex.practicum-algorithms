import { receiveInput } from "../../../utility/receiveInput";
import { getCombinations } from "./get-combinations";

receiveInput(
  (numbers: string[]) => console.log(getCombinations(numbers.join(""))),
  (input) => input
);
