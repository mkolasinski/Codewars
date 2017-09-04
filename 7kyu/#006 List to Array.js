function listToArray(list) {
  let array = [];
  do {
    array.push(list.value);
  } while (list = list.next);
  return array
}