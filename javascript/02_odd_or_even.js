function oddOrEven(number){
    if(number/2  === Math.floor(number/2)){
        return "even";
    }else{
        return "odd";
    }
}

function isEven(number){
    return (number%2==0)?true:false;
}

function isOdd(number){
    return (number%2==0)?false:true;
}