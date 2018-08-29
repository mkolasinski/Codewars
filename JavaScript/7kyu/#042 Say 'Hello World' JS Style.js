var say = function (string1) {
  return function (wordWord) {
    return string1 + ' ' + wordWord;
  }
}