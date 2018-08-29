// 1 option

function getAge(inputString){
  return parseInt(inputString);
}

// 2 option

function getAge(inputString){
  return Number(inputString.replace(/\D/g, ""));
}
