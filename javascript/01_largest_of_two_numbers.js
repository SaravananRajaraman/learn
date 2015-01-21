function largestNumber_1(num_1, num_2){
    if(num_1 > num_2){
        return num_1;
    }else{
        return num_2;
    }
}

function largestNumber_2(num_1, num_2){
    if(num_1 > num_2)
        return num_1;
    else
        return num_2;
}

function largestNumber_3(num_1, num_2){
    if(num_1 > num_2){
        return num_1;
    }else if(num_1 < num_2){
        return num_2;
    }else{
        return;
    }
}

function largestNumber(num_1, num_2){
    return ( num_1 > num_2 ) ? num_1 : num_2;
}


function smallestNumber_1(num_1, num_2){
    if(num_1 < num_2){
        return num_1;
    }else{
        return num_2;
    }
}

function smallestNumber_2(num_1, num_2){
    if(num_1 < num_2)
        return num_1;
    else
        return num_2;
}

function smallestNumber_3(num_1, num_2){
    if(num_1 < num_2){
        return num_1;
    }else if(num_1 > num_2){
        return num_2;
    }else{
        return;
    }
}

function smallestNumber(num_1, num_2){
    return ( num_1 < num_2 ) ? num_1 : num_2;
}
