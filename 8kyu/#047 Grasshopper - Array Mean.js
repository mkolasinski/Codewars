var findAverage = function (nums) {
  return nums.reduce((x,y) => x+y) / nums.length;
}