function largestNumber(number){
    let largestNumberIs=number[0];
    for(i=1; i<=arr.length; i++){
    const currentItem=number[i];

    if(currentItem>largestNumberIs){
        largestNumberIs=currentItem
    }
}
    return largestNumberIs;
}

const arr=[3,10,9,1,0.5,6,15,5,8,46,12]
console.log(largestNumber(arr))