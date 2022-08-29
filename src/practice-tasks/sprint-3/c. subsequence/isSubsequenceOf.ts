
import { Stack } from "../../../final-tasks/sprint-2/b.calculator/stack"

export const isSubsequenceOf = (subsequence: string, str: string) => {
  const stack = new Stack(subsequence.split('').reverse())

  for (let char of str) {
    if (stack.isEmpty) break;
    
    if (char === stack.peak()) {
      stack.pop()
    }
  }

  return stack.isEmpty ? 'True' : 'False'
}
