Number.prototype.toString = function () {
  return this + ""
}
Boolean.prototype.toString = function () {
  return this + ""
}
Array.prototype.toString = function () {
  return JSON.stringify(this)
}