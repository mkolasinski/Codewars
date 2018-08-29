function autocomplete(input, dictionary) {
  input = input.replace(/[^a-zA-Z-]/g, '');
  output = [];
  for (i = 0; i < dictionary.length; i++) {
    if (input.toUpperCase().localeCompare(dictionary[i].substring
      (0, input.length).toUpperCase()) === 0 && output.length < 5) {
      output.push(dictionary[i]);
    }
  }
  return output;
}