import { receiveInput } from "../../../utility/receiveInput";

receiveInput(solve, (arg) => arg)

function solve(input) {
  const [str] = input

  const result = String(isPalindrome(str))
  console.log(`${result[0].toUpperCase()}${result.slice(1)}`)
}

const isPalindrome = (str) => {
  const ONLY_LETTERS_AND_NUMS = /\w/g
  const onlyChars = str.match(ONLY_LETTERS_AND_NUMS)

  return onlyChars.join('').toLowerCase() === onlyChars.reverse().join('').toLowerCase()
}