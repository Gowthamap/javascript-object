function check_leapyear(year) {

    if((year%4===0)&&(year%100!==0)||(year%400==0)) {
        return("It is a leap year");
    }else{
        return ("It is not a leap year");
    }

}

console.log(check_leapyear(2028));