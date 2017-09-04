const getAverage = x => Math.floor(x.reduce(
    function (a,b) {
      return a+b;
    }
  )/x.length
);