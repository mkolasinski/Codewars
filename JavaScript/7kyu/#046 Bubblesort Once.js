function bubblesortOnce(intArr) {
  for (let i = 1; i < intArr.length; i++) {
    if (intArr[i] < intArr[i - 1]) {
      let otherArr = intArr[i - 1];
      intArr[i - 1] = intArr[i];
      intArr[i] = otherArr;
    }
  }
  return intArr;
}