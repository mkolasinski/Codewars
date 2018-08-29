function areYouPlayingBanjo(name) {
  return /^r/i.test(name)
    ? name + ' plays banjo'
    : name + ' does not play banjo' ;
}