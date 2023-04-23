export const binarySearch = (
  arr: number[],
  target: number,
  start = 0,
  end = arr.length - 1
): number => {
  if (end < start) return -1;
  const mid = Math.floor((start + end) / 2);
  const midElement = arr[mid];
  if (midElement >= target) return mid;

  if (midElement < target) {
    return binarySearch(arr, target, start, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
};

