function armstrong(num) {
    let n = num;
    let r, sum = 0;

    while (n !== 0) {
        r = n % 10;
        sum = sum + (r * r * r);
        n = parseInt(n/10);
    }

    if (sum === num) {
        return ("It is an armstrong number");
    } else {
        return ("It is not an armstrong number");
    }

}

console.log(armstrong(2));