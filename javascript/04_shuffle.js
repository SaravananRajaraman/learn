//shuffle array (splice method)
function shuffleArray(array) {
    var temp = [];
    var len=array.length;
    while(len){
        temp.push(array.splice(Math.floor(Math.random()*array.length),1)[0]);
        len--;
    }
    return temp;
}//console.log("Here >>> "+shuffleArray([4,2,3,5,8,1,0]));

//Shuffle String
function shuffleString(string){
    return shuffleArray(string.split("")).join("");
}//console.log("Here >>> "+shuffleString('hello'));

//Todo: generate random number
/*
function getRmdNumb(count,start,end){
    var test=[];
    for(var i=start;i<end;i++){
        test.push(i);
    }
    var test2=shuffleArray(test);
    var test3=[];
    for(var j=0;j<count;j++){
        test3.push(test2.pop());
    }
    return test3;
}
console.log(getRmdNumb(5,-50,50));
*/
