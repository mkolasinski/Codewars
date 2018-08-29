function cheapestQuote(newspaper) {
  var a = Math.floor(newspaper / 40);
  var b = Math.floor((newspaper - a * 40) / 20);
  var c = Math.floor((newspaper - (a * 40 + b * 20)) / 10);
  var d = Math.floor((newspaper - (a * 40 + b * 20 + c * 10)) / 5);
  var e = Math.floor(newspaper - (a * 40 + b * 20 + c * 10 + d * 5));

  return +(a * 3.85 + b * 1.93 + c * 0.97 + d * 0.49 + e * 0.1).toFixed(2);
}