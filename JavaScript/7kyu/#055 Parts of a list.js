function partlist(arr) {
    let result = [];

    for ( let i = 1; i < arr.length; i+=1 ) {
        result.push([arr.slice(0,i).join(' '),arr.slice(i).join(' ')]);
    }
    return result;
}