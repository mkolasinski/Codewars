function trim(arr, size) {
  if (arr.length <= size) {
    return arr;
  }

  let example = (arr.length <= 3) ? size : size - 3;

  return arr.split('').splice(0, example).join('') + '...';
}