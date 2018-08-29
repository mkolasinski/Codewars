Array.prototype.valueOf = function() {
  return this.length === 0 ? 0 : this.reduce(
    (total, next) => total + next)
}/**
 * Created by m.kolasinski on 2017-09-05.
 */
