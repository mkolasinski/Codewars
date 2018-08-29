function datingRange(age){
  var max = age > 14 ? (age-7)*2 : age + (0.10 * age);
  var min = age > 14 ? (age/2)+7 : age - (0.10 * age);

  return Math.floor(min) + "-" + Math.floor(max);
}