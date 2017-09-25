// return masked string
function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  }

  var i = 0;

  while (i < cc.length - 4) {
    cc = cc.replace(cc[i], "#");
    i++;
  }
  return cc;
}