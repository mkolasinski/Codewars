//Calculate (x^y) % n for large y
function modpow(x, y, n) {
  var result = 1;
  while (y) {
    if (y % 2) {
      result = ( result * x ) % n;
    }

    x = ( x * x) % n;
    y = Math.floor(y / 2);
  }

  return result;
}