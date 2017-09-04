function getCount (count) {

  return count.replace(/[^aeiou]/g,'').length;

}