function getAverageAge(list) {
  return Math.round(1 / list.length * list.map((a) => a.age).reduce(function (a, b) {
      return a + b;
    }));
}