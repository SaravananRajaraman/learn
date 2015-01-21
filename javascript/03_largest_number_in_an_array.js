function biggestNumber(array){
    var biggest = array[0];
    for(var i = 1; i < array.length; i++){
        if(biggest < array[i]){
            biggest = array[i];
        }
    }
    return biggest;
}

function smallestNumber(array){
    var smallest = array[0];
    for(var i = 1; i < array.length; i++){
        if(smallest > array[i]){
            smallest = array[i];
        }
    }
    return smallest;
}