function findQradrant(x, y) {

    if(x>0 && y>0) {
        return "It lies in the first quadrant"
    } else if(x<0 && y>0) {
        return "It lies in the second quadrant"
    }else if(x<0 && y<0){
        return "It lies in the third quadrant"
    }else if(x>0 && y<0) {
        return "It lies in the fourth quadrant"
    }else if(x==0 && y==0) {
        return "It lies at the origin"
    }else if(x==0 && y<0){
        return "It lies at negative y axis"
    }else if(x==0 && y>0) {
        return "It lies at positive y axis"
    }else if(y==0 && x<0) {
        return "It lies at negative x axis"
    }else (y==0 && x>0)
        return "It lies at positive x axis"

}

console.log(findQradrant(1,0));