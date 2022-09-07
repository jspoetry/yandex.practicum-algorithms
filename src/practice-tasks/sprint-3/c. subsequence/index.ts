import { receiveInput } from '~/src/utility/receiveInput'
import { isSubsequenceOf } from '~/src/practice-tasks/sprint-3/c. subsequence/isSubsequenceOf'

receiveInput((input) => {
  const [subsequence, str] = input
  console.log(isSubsequenceOf(subsequence, str))
}, (arg) => arg)