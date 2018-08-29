function race(v1, v2, g) {

  if (v1 <= v2) {

    t = g / (v2-v1)

    var ts = Math.floor(t * 3600)
    s = ts % 60
    var tmn = Math.floor(t  * 60)
    mn = tmn % 60
    var h = Math.floor(t)


    return [h, mn, s]
  }
  else {
    return null
  }
}