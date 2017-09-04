const rps = (p1, p2) => {
  let winner = ["rockscissors", "scissorspaper", "paperrock"];

  if (winner.indexOf(p1+p2) >= 0) {
    return "Player 1 won!";
  }
  else if (winner.indexOf(p2+p1) >= 0) {
    return "Player 2 won!";
  }
  else {
    return "Draw!";
  }
};