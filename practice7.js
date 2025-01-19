function sumOfAnArray(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
const arrayIs=[1,2,3,4,5,6];
const result= sumOfAnArray(arrayIs)
console.log(result);