function isInteser(x){
    if(typeof x !=="number"){
        return "Give me a valid n number"
    }
    if(x%1==0){
        return true;
    }else{
        return false;
    }
}
console.log(isInteser(674))