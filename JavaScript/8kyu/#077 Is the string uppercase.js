String.prototype.isUpperCase = function () {
  return this == this.toUpperCase()
};

function is_uppercase(string) {
  return string.isUpperCase()
}