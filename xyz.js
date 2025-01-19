function SumOfArray(ArrayName)
{
    let sum=0;
for(i=0; i<ArrayName.length; i++){
    sum=sum+ArrayName[i];
}
return sum;
}
let ArrayIs=[6,5,1,1,1,1,9];
let result=SumOfArray(ArrayIs);
console.log(result);