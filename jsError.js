let x=12;
try{
    if(x<10) throw "it too low"
    if(x>10) throw "its perfact"
}catch(err){
    console.log(err)
}