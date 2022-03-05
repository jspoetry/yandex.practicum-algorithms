import { isGreater } from "./is-greater";

/**
 * @param arr {unknown[]}
 * @param i {number}
 * @param j {number}
 * @returns {*}
 */
const swapArrayItems = (arr, i, j) => void ([arr[i], arr[j]] = [arr[j], arr[i]]);

/**
 * @param arr {unknown[]}
 * @param low {number}
 * @param high {number}
 * @returns {number}
 */
const partition = (arr, low, high) => {
  const pivot = arr[high];

  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (isGreater(arr[j], pivot)) {
      swapArrayItems(arr, ++i, j)
    }
  }

  swapArrayItems(arr, ++i, high)

  return i;
}

/**
 * @param array {unknown[]}
 * @param low {number}
 * @param high {number}
 * @returns {unknown[]}
 */
export const quicksort = (array, low = 0, high = array.length - 1) => {
  if (low >= high) return array;

  const pivot = partition(array, low, high)

  quicksort(array, low, pivot - 1);
  quicksort(array, pivot + 1, high)
}


