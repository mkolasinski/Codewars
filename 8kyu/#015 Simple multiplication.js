// 1 option:

const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9;


// 2 option:
function simpleMultiplication(number){
  if (number % 2 === 0) {
    return number * 8;
  }
  else {
    return number * 9;
  }
}