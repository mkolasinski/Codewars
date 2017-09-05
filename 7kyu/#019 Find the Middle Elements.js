var gimme = function (inputArray) {
  var newArray = [inputArray[0], inputArray[1], inputArray[2]];

  newArray = newArray.sort((x,y) => x-y);

  return inputArray.indexOf(newArray[1]);
};