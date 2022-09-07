import { receiveInput } from "~/src/utility/receiveInput";
import { transformToArrayIfIsNot } from "~/src/utility/transformToArrayIfIsNot";

receiveInput(solve)

function solve(input) {
  const [len, arr] = input
  const inputArr = transformToArrayIfIsNot(arr)
  console.log(defineNearestZero(inputArr).join(' '))
}

const defineNearestZero = (arr) => {
  const nearestZeroElements = Array(arr.length)
  const zeroIndexes = []

  arr.forEach((el, index) => {
    if (el === 0) {
      zeroIndexes.push(index)
      nearestZeroElements[index] = 0
    }
  })

  const hasAnyZeros = zeroIndexes.length > 1

  if (!hasAnyZeros) {
    const [zeroIndex] = zeroIndexes
    incrementUntil(zeroIndex + 1, nearestZeroElements.length - 1, nearestZeroElements)
    decrementUntil(zeroIndex - 1, 0, nearestZeroElements)
    return nearestZeroElements;
  }

  zeroIndexes.map((zeroIndex, i) => {
    let [first, second] = getIntervalInArray(zeroIndexes, i)

    if (i === 0 && first < nearestZeroElements.length - 1) {
      incrementUntil(first + 1, nearestZeroElements.length - 1, nearestZeroElements)
    }

    if (first > 0 && i === zeroIndexes.length - 1 && second === undefined) {
      decrementUntil(first - 1, 0, nearestZeroElements)
    }

    insetIntoArrayInTwoDirection(first, second, nearestZeroElements)
  })

  return nearestZeroElements
}

const getIntervalInArray = (arr, index) => {
  const start = arr[arr.length - 1 - index]
  const end = arr[arr.length - 2 - index]

  return [start, end]
}

const insetIntoArrayInTwoDirection = (start, end, array) => {
  const interval = start - end - 1
  if (!interval) return;

  const halfInterval = Math.ceil(interval / 2)

  for (let i = 1; i <= halfInterval; i++) {
    const leftIndex = start - i
    const rightIndex = end + i
    array[leftIndex] = i
    if (leftIndex !== rightIndex) {
      array[rightIndex] = i
    }
  }
}

const incrementUntil = (from, until, arr) => {
  let value = 0
  for (let i = from; i <= until; i++) {
    arr[i] = ++value
  }
}

const decrementUntil = (from, until, arr) => {
  let value = 0
  for (let i = from; i >= until; i--) {
    arr[i] = ++value
  }
}