function squaresOnly(a) {
  return a.filter(number => number ** 0.5 % 1 == 0);
}