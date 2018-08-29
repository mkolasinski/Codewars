function averages(numbers) {
    let result = [];

    if ( numbers == null ) {
        return result;
    }

    for ( let i = 0; i < numbers.length-1; i++) {
        result.push((numbers[i] + numbers[i+1])/2)
    }
    return result;
}