import {receiveInput} from "~/src/utility/receiveInput";
import {solution} from "./solution";

receiveInput(
  ([calcStr]) => console.log(solution(calcStr)),
  (str) => str
)