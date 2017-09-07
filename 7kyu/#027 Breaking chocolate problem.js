var breakChocolate = function (n, m) {
  var chocolate = n * m;
  var totalBreaks = chocolate - 1;
  if (totalBreaks <= 0) {
    return 0;
  }
  return totalBreaks;
};