const mdc = (a,b) => {
  let c = Math.min(Math.abs(a),Math.abs(b));

  while (a%c !==0 || b%c !==0){
    c--;
  }
  return c;
}

const calculateRatio = (w,h) => {
  if (w===0 || h===0) {
    return 'Error';
  }
  const m = mdc(w,h);
  return `${w/m}:${h/m}`;
}