function findSenior(list) {
  return list.filter( a => a.age === list.reduce(function(a,b)
  { return a.age > b.age ? a : b}).age);}