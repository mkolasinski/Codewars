function twoCount(n) {
  let count = 0;
  while (true) {
    if (n % 2 === 0) {
      count++;
      n /= 2
    }
    else {
      break;
    }
  }
  return count;
}