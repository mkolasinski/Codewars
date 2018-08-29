function positiveSum(arr) {
  var positiveArray = arr.filter( function (x) {
    return x > 0});
  var sum = 0;
  positiveArray.forEach(function(x) { sum += x;});
  return sum;
}