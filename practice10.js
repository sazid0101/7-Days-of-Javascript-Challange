function biggestName(YouMe){
    let biggest=YouMe[0]
    for(i=1;i<YouMe.length;i++){
        if(YouMe[i].length>biggest.length){
            biggest=YouMe[i];
        }
    }
    return biggest;
}

const arr=["sazid","hafsa","umme","shorna","islam"]
const result= biggestName(arr)
console.log(result)