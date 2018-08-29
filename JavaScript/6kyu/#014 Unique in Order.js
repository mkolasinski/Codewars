var uniqueInOrder = function (iterable) {
  var i = 0;
  var result = [];

  while (i < iterable.length) {
    if (iterable[i] !== iterable[i + 1]) {
      result.push(iterable[i]);
    }
    i += 1;
  }
  return result;
}