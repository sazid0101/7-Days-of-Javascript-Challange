function calculator(num1,num2,callback){
    let sum = num1 + num2;
    if(callback) callback(sum)
    // return sum;
}
calculator(5,6, function(result){
    console.log(result)
})