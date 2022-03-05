/**
 * @param arr {number[]}
 * @param low {number}
 * @param high {number}
 * @returns {number|-1}
 */
export const findMidInBrokenArray = (arr, low = 0, high = arr.length - 1) => {
  if (high < low) return -1;
  if (low === high) return low;

  const mid = Math.floor((low + high) / 2);

  if (mid < high && arr[mid] > arr[mid + 1]) {
    return mid;
  }

  if (mid > low && arr[mid] < arr[mid - 1]) {
    return mid - 1;
  }

  return arr[low] >= arr[mid]
    ? findMidInBrokenArray(arr, low, mid - 1)
    : findMidInBrokenArray(arr, mid + 1, high)
}