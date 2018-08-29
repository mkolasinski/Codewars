function last(list){
  let x = arguments[arguments.length-1];

  return x[x.length-1] || x;
}