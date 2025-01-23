const myStatus = false;

const myPromise = new Promise(function(resolve, reject){

    setTimeout(function(){
        if(myStatus){
            resolve("its successful")
        }else{
            reject("its failed")
        }
    }, 2000);
})

myPromise
    .then(function(value){
        console.log(value)
    })
    .catch(function(err){
        console.log(err)
    })