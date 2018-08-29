function absentVowel(x) {

  var y = x.replace(/[^aeiou]/g, '');
  var a = y.replace(/[^eiou]/g, '');
  var e = y.replace(/[^aiou]/g, '');
  var i = y.replace(/[^aeou]/g, '');
  var o = y.replace(/[^aeiu]/g, '');
  var u = y.replace(/[^aeio]/g, '');

  if (a == y) {
    return 0;
  }
  else if (e == y) {
    return 1;
  }
  else if (i == y) {
    return 2;
  }
  else if (o == y) {
    return 3;
  }
  else if (u == y) {
    return 4;
  }
}