function multi(arr) {
  return arr.reduce((sum, x) => sum * x, 1);
}
function add(arr) {
  return arr.reduce((sum, x) => sum + x, 0);
}
function reverse(str) {
  return str.split(" ").reverse().join(" ");
}