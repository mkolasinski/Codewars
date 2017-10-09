function squareArea(A) {
  const r = 1 / (Math.PI / ( 2 * A ));
  return Math.round(r * r * 100) / 100;
}