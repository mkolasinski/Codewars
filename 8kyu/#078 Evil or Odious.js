function evil(n) {
  let k = 0;
  for (;n > 0; n = n >> 1)
    k += n & 1;
  return k % 2 === 1 ? "It's Odious!" : "It's Evil!"
}