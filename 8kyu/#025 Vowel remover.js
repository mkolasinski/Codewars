// 1 option:

function shortcut(string){
  return string.replace(/[aeiou]/g, '');
}

// 2 option:

const shortcut = (s) => s.replace(/[aeiou]/g,'');