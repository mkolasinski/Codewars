/**
 * Created by m.kolasinski on 2017-09-25.
 */
function saleHotdogs(n) {
  if (n<5) {
    return n*100;
  }
  if (n>=5 && n<10) {
    return n*95;
  }
  if (n>=10) {
    return n*90;
  }
}