function XO(str) {
  const arrayCharacter = str.toLowerCase().split("");
  const x = arrayCharacter.filter(ch => ch === "x") || [];
  const o = arrayCharacter.filter(ch => ch === "o") || [];
  return x.length === o.length ? true : false;
}