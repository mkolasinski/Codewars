var FindFunction = function (func, arr) {
  return arr.filter(func.filter(function (current) {
    return (typeof current === 'function');
  })[0]);
}