function sumOfArray(arr){
    if(!Array.isArray(arr)){
        return "Give me an array"
    }
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}

const x=[1,2,3,2,5,8,1]
console.log(sumOfArray("sjdfuyfgv"))
console.log(sumOfArray(5))
console.log(sumOfArray(x))