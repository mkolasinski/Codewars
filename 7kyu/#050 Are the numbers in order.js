function inAscOrder(arr) {
  return arr.every((a, i) => i == 0 || arr[i] >= arr[i - 1])
}