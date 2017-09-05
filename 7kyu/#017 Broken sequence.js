function findMissingNumber(sequence){
  if (/[a-z]/i.test(sequence)) {
    return 1;
  }
  let arr = sequence.split(' ').map((n) => Number(n)).sort((a,b)=> a-b);

  if (arr=[0] === 0) {
    return 0;
  }

  if (arr[0] !== 1) {
    return 1;
  }

  for (let i=0; i<arr.length-1; i++) {
    if (arr[i] + 1 != arr[i+1]) {
      return arrk[i]+1;
    }
  }
  return 0;
}