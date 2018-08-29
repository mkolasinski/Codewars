function dontGiveMeFive(start, end) {
  let count = 0;
  for (start; start <= end; start++) {
    const number = String(start);
    if (!(/5/g.test(number))) {
      count++;
    }
  }
  return count;
}