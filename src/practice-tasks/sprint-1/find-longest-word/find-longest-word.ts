import { receiveInput } from "~/src/utility/receiveInput";
import { transformToArrayIfIsNot } from "~/src/utility/transformToArrayIfIsNot";

receiveInput(solve)

function solve(input) {
  const [len, words] = input

  const longestWord = findLongestWord(transformToArrayIfIsNot(words))

  console.log(`${longestWord}\n${longestWord.length}`)
}

const findLongestWord = (words) => {
  let longestWord = words[0] || ''

  words.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  })

  return longestWord
}

