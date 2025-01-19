// const newArray=[10,20,30,40,50,60,70]
// let sum=0;
// for(i=0;i<newArray.length;i++){
//     sum=sum+newArray[i]
// }
// console.log(sum)
// console.log(sum/newArray.length)

// let largestNumber=newArray[0]
// for(i=0;i<newArray.length;i++){
//     if(newArray[i]>largestNumber){
//         largestNumber=newArray[i]
//     }
// }
// console.log(largestNumber)


const myArray=[25,87,92,57,88,34,59];
let sum=0;
for(i=0;i<myArray.length;i++){
    sum=sum+myArray[i]
}
console.log(sum)
console.log(sum/myArray.length)

let smallestNumber=myArray[0]
for(i=0;i<myArray.length;i++){
    if(myArray[i]<smallestNumber){
        smallestNumber=myArray[i]
    }
}
console.log(smallestNumber)