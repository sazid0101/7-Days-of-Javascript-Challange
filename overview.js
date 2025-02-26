// function multiply(n1,n2){
//     result = n1 * n2
//     return result
//   }
//   const output = multiply(5,6)
//   console.log(output)


// const isEven = n => n%2 == 0;
// const result = isEven(91)
// console.log(result)


const person = {
    name : "sazid",
    age : 25
}
const numbers = [5,7,1,0,6,9,18]
const details = `my name is ${person.name}, i am ${person.age} years old,i have ${numbers[2]} mobile phone`

const newNumbers = [...numbers,5]
const newNumbers2 = [...numbers,12,7]
const newNumbers3 = newNumbers.push(90)
console.log(numbers,newNumbers,newNumbers2)
console.log(newNumbers3)
console.log(details)
