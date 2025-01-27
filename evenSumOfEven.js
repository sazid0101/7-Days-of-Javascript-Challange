function myArray(numbers){
    const evens = [];
    let sum = 0;
    for( const number of numbers){
        if(number % 2 === 0){
            evens.push(number)
            sum = sum + number;
        }
    }return {evens , sum};
}
const arrayIs = [3,2,6,4,9,7,8,13,40];

const result = (myArray(arrayIs))

console.log("The evens array is :", result.evens)
console.log("The sum is :", result.sum)