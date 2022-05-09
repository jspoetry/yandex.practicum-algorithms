/**
 * @param arr {number[]}
 * @param key {number}
 * @param low {number}
 * @param high {number}
 * @returns {number|-1}
 */
export const binarySearch = (arr, key, low = 0, high = arr.length - 1) => {
  if (high < low) return -1;

  const mid = Math.floor((low + high) / 2);
  if (key === arr[mid]) return mid;

  return key > arr[mid]
    ? binarySearch(arr, key, mid + 1, high)
    : binarySearch(arr, key, low, mid - 1)
}