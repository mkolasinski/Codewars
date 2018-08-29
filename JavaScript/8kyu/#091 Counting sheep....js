function countSheeps(arrayOfSheep) {
  var num = 0;
  for ( var i = 0; i < arrayOfSheep.length; i += 1) {
    if (arrayOfSheep[i] == true) { num = num + 1 }
  }
  return num;
}