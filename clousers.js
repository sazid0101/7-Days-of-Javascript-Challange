function temporary(){
    let counter = 0;
    return function(){
        counter=counter+1;
    }
}
const add = temporary()
console.log(add)
add()