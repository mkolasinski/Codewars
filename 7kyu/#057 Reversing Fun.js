function flipNumber(n) {
    var solution = "";
    var arr = n.split("");
    var length = arr.length;
    for (i = 0; i < length; i++) {
        arr.reverse();
        solution += arr[0];
        arr.shift();
    }
    return solution;
}