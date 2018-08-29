function groupByCommas(n) {
  var _reverse = function (m) {
    return m.split('').reverse().join('');
  }
  return _reverse(_reverse(n.toString()).replace(/(\d{3})\B/g, '$1,'));
}