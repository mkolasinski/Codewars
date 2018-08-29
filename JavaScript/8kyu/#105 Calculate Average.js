/**
 * Created by m.kolasinski on 2017-10-08.
 */
function find_average(array) {
  var sum = array.reduce(function (a, b) {
    return a + b
  });
  var average = sum / array.length;

  return average;
}