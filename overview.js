// function multiply(n1,n2){
//     result = n1 * n2
//     return result
//   }
//   const output = multiply(5,6)
//   console.log(output)


// const isEven = n => n%2 == 0;
// const result = isEven(91)
// console.log(result)


// const person = {
//     name : "sazid",
//     age : 25
// }
// const numbers = [5,7,1,0,6,9,18]
// const details = `my name is ${person.name}, i am ${person.age} years old,i have ${numbers[2]} mobile phone`

// const newNumbers = [...numbers,5]
// const newNumbers2 = [...numbers,12,7]
// const newNumbers3 = newNumbers.push(90)
// console.log(numbers,newNumbers,newNumbers2)
// console.log(newNumbers3)
// console.log(details)




// const products = [
//     {name : "laptop", color : "red", price : "35500",},
//     {name : "phone", color : "blue", price : "15500",},
//     {name : "iphone", color : "black", price : "55000",},
//     {name : "watch", color : "golden", price : "5500",}
// ]
// // const productName = products.map(product =>product.name)
// // // console.log(productName)

// // products.forEach(product => console.log(product.price))

// // const specificName = products.filter(product => product.price >35000)
// // console.log(specificName)

// // const specificName2 = products.filter(product=> product.name.includes("p"))
// // console.log(specificName2)

// // const specificName3 = products.find(product=> product.name.includes("p"))
// // console.log(specificName3)




// const person = {
//       name : "sazid",
//       age : 25,
//       position : "developer",
//       favSub : ["physics", "math"],
//       watch : {
//         color : "black",
//         price : 500,
//         brand : "casio"
//       }
//      }
     
// const {name,favSub,watch} = person
// const [first] = person.favSub[0]
// const {color} = person.watch
// console.log(color)
// console.log(first)
// console.log(name,favSub,watch)






// const person3 = {
//     name : "sazid",
//     age : 25,
//     position : "developer",
//     favSub : ["physics", "math"],
//     watch : {
//       color : "black",
//       price : 500,
//       brand : "casio"
//     }
//    }
//    const person4 = {"name":"sazid","age":25,"position":"developer","favSub":["physics","math"],"watch":{"color":"black","price":500,"brand":"casio"}}

//    const jsonPerson3 = JSON.stringify(person3)
//    console.log(person3)
//    console.log(jsonPerson3)
//    const jsonPerson4 = JSON.parse(jsonPerson3)
//    console.log(jsonPerson4)




// const person3 = {
//     name : "sazid",
//     age : 25,
//     position : "developer",
//     favSub : ["physics", "math"],
//     watch : {
//       color : "black",
//       price : 500,
//       brand : "casio"
//     }
//    }

// const keys = Object.keys(person3)
// const values = Object.values(person3)
// console.log(keys)
// console.log(values)

// const myProducts = [
//          {name : "laptop", color : "red", price : "35500",},
//          {name : "phone", color : "blue", price : "15500",},
//          {name : "iphone", color : "black", price : "55000",},
//          {name : "watch", color : "golden", price : "5500",}
//      ]
// const newProduct = {name : "mouse", color : "yellow",}
// const newProductsArray = [...myProducts,newProduct]
// console.log(newProductsArray)
// const removeProduct = myProducts.filter(product => product.name !== "laptop")
// console.log(removeProduct)


const person3 = {
    name : "sazid",
    age : 25,
    position : "developer",
    favSub : ["physics", "math"],
    watch : {
      color : "black",
      price : 500,
      'brand' : "casio"
    }
   }

   const personName = person3.name
   console.log(personName)
   console.log(person3.watch["brand"])