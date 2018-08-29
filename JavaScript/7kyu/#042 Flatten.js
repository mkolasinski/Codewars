var flatten = function (array) {
  var newArray = [].concat.apply([], array);
  return newArray;
}