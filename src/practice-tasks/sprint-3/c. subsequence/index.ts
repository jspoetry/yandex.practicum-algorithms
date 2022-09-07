import { receiveInput } from '~/src/utility/receiveInput'
import { isSubsequenceOf } from '~/src/practice-tasks/sprint-3/c. subsequence/isSubsequenceOf'

receiveInput((input) => {
  const [subsequence, str] = input
  if (typeof subsequence === "string" && typeof str === "string") {
    console.log(isSubsequenceOf(subsequence, str));
  }
}, (arg) => arg)