import { binarySearch } from "./binary-search";
import { findMidInBrokenArray } from './find-mid-in-broken-array'

/**
 * @param arr {number[]}
 * @param key {number}
 * @returns {number|-1}
 */
export const brokenSearch = (arr, key) => {
  let pivot = findMidInBrokenArray(arr);

  if (pivot === -1) {
    return binarySearch(arr, key);
  }

  if (arr[pivot] === key) {
    return pivot;
  }

  return arr[0] <= key
    ? binarySearch(arr, key, 0, pivot - 1)
    : binarySearch(arr, key, pivot + 1, arr.length - 1)
}