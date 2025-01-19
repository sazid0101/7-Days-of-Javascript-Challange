function facto(number){
    let result = 1;
    for( i=number;i>=1;i--){
    result=result*i;

    return result;
    }
    if(number===0 || number===1){
        return 1;
    }
}

let result=facto(0)
console.log(result)

