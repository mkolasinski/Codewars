function evaporator(content, evap_per_day, threshold){
    let c = content;
    let e = evap_per_day;
    let t = threshold;

    let tQuality = c * t/100;

    let days = 0;

    while ( c >= tQuality) {
        c *= ((100 - e)/100);
        days ++;
    }
    return days;
}