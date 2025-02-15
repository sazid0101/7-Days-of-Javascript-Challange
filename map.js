const myArray = [4,3,2,7,9,3,6]

function doubleIt(num){
    console.log(num)
    return num*3
}

const result = myArray.map(doubleIt)
console.log(result)