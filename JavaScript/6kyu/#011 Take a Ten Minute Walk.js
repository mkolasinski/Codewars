function isValidWalk(walk) {
  let directions = {
    n: 0,
    s: 0,
    w: 0,
    e: 0
  };

  walk.forEach(function (x) {
    directions[x]++;
  });

  return (walk.length === 10) && ( directions.n - directions.s === 0 )
    && ( directions.w - directions.e === 0);

}