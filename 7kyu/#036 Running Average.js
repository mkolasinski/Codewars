const runningAverage = () => {
  let result = [];
  return function (number) {
    result.push(number);
    const newResult = result.reduce((total, next) => total + next, 0);
    return (newResult / result.length).toFixed(2) * 1;
  }
};