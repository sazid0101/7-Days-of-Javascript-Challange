// ১ থেকে ১০০ পর্যন্ত সংখ্যাগুলোর মধ্যে কোন সংখ্যা ৩,৫ এবং ৩ ও ৫ উভয় দিয়ে বিভাজ্য তা বের করুন

function fizzBuzz(number){
    for(let i=1;i<=number;i++){
        if(i % 15 === 0){
            console.log(`${i} is divisible by 3 & 5.`)
        }else if(i % 3 === 0){
            console.log(`${i} is divisible by 3.`)
        }else if(i % 5 === 0){
            console.log(`${i} is divisible by 5.`)
        }else{
            console.log(i)
        }
    }
}
fizzBuzz(30)