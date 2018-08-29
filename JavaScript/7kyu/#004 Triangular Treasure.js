function triangular( n ) {

  if ( n > 0 ) {
    return n + triangular( n - 1 );
  }
  else {
    return 0;
  }
}