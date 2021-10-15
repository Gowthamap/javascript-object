function strongNumber(n) {

    let s = 0, r, num, f, i;
    num = n;

    while (n > 0) {
        r = n % 10;
        f = 1; i = 1;

        while (i <= r) {
            f = f * i;
            i++;
        }
        s = s + f;
        n = parseInt(n / 10);
    }

    if (num === s) {
        return ("This is a strong Number " + num);
    } else {
        return ("This is not a strong number " + num)
    }

}

console.log(strongNumber(3));