function HTMLGen() {
  this.a = function (something) {
    return '<a>' + something + '</a>';
  }
  this.b = function (something) {
    return '<b>' + something + '</b>';
  }
  this.p = function (something) {
    return '<p>' + something + '</p>';
  }
  this.body = function (something) {
    return '<body>' + something + '</body>';
  }
  this.div = function (something) {
    return '<div>' + something + '</div>';
  }
  this.span = function (something) {
    return '<span>' + something + '</span>';
  }
  this.title = function (something) {
    return '<title>' + something + '</title>';
  }
  this.comment = function (something) {
    return '<!--' + something + '-->';
  }
}