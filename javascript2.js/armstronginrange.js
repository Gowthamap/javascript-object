function armstrongNumRange(a ,b) {

    for(let i=a;i<=b;i++) {
        let numOfDigits = i.toString().length;
        
        let sum = 0;
        let temp =i;

        while (temp > 0) {

            let remainder = temp % 10;
            sum += remainder ** numOfDigits;
            // removing last digit from the number
            temp = parseInt(temp/10); // convert float into integer
        }
        if (sum == i) {
            console.log(i);
        }
    }

}

armstrongNumRange(1,1000);