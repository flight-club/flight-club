function GetSum( a,b ) {
    let low = a<b ? a : b;
    let high = a>b ? a : b
    let sum = 0;
    for(let i = low; i <= high; i++) {
        sum+=i;
    }
    return sum;
}

