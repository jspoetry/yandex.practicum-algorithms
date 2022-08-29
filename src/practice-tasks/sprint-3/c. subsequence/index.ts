
import { receiveInput } from "../../../utility/receiveInput";
import { isSubsequenceOf } from './isSubsequenceOf'

receiveInput((input) => {
  console.log(isSubsequenceOf(input[0], input[1]))
})