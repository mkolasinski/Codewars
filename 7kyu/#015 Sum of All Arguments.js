function sum(arguments) {
  return [].slice.call(arguments).reduce((a,b) => a + b);
}