function chain(input, fs) {
  let all = input;
  for (let i = 0; i < fs.length; i++)
    all = fs[i](all);
  return all;
}