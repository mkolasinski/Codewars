function checkAlive (health) {
  if (health > 0) {
    return true;
  }
  else if (health > -10 || health < 10) {
    return false;
  }
}