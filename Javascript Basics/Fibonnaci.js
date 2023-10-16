function fibbonaci(n){
    let sequence = [];
    if (n == 0){
        return sequence;
    }

    sequence.push(0);

    if (n == 1){
        return sequence;
    }

    sequence.push(1);

    for(let i = 2; i < n; i++){
        let nextNumber = sequence[i -1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}

let retVal = fibbonaci(10);
console.log(retVal);
