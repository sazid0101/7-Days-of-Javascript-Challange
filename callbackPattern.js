const paymentSuccess = true;
const marks = 90;

function enroll(callback){
    console.log("course enrollment in process...")

    setTimeout(function(){
        if(paymentSuccess){
            callback()
        }else{
            console.log("payment failed...")
        }
    },2000);
}
function progress(callback){
    console.log("course in progress..")

    setTimeout(function(){
        if(marks>=80){
            callback()
        }else{
            console.log("you could not get enough marks to get certificate")
        }
    },2000)
}

function getCertificate(){
    console.log("preparing your certificate")

    setTimeout(function(){
        console.log("congratulation ! you get your certificate")
    }, 1000)
}

enroll(function(){
    progress(getCertificate)
})