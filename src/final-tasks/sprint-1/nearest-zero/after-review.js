import {receiveInput} from "../../../utility/receiveInput.js";
import {transformToArrayIfIsNot} from "../../../utility/transformToArrayIfIsNot.js";

receiveInput(solve)

function solve(input) {
  const [len, arr] = input
  const inputArr = transformToArrayIfIsNot(arr)
  console.log(defineNearestZero(inputArr).join(' '))
}

const defineNearestZero = (inputArray) => {
  const len = inputArray.length
  const nearestZeroElements = [...inputArray]

  // increment to end: [0, 1, 4, 9, 0] -> [0, 1, 2, 3, 0]
  for (let i = 1; i < len; i++) {
    if (nearestZeroElements[i] !== 0) {
      nearestZeroElements[i] = nearestZeroElements[i - 1] + 1;
    }
  }

  // decrement to start: [0, 1, 2, 3, 0] ->  [0, 1, 2, 1, 0]
  for (let i = len - 2; i >= 0; i--) {
    if (nearestZeroElements[i] !== 0) {
      if (nearestZeroElements[i] > nearestZeroElements[i + 1] || i === 0) {
        console.log(nearestZeroElements[i], nearestZeroElements[i + 1])
        nearestZeroElements[i] = nearestZeroElements[i + 1] + 1;
      }
    }
  }

  return nearestZeroElements
}