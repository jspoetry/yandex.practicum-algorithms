import {receiveInput} from "~/src/utility/receiveInput";
import { solution } from "./solution";


receiveInput((input) => {
  console.log(solution(input).join('\n'))
})