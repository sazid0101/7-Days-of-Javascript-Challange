// filter duplicate numbers
const numbers=[ 8, 5, 2, 7, 2, 3, 6, 8, 1, 3, 5, 6 ];
const duplicates=numbers.filter(function(value,index,array){
    return array.indexOf(value) !==index;
})
console.log(duplicates)

// filter unique numbers
const newNumbers=[ 8, 5, 2, 7, 2, 3, 6, 8, 1, 3, 5, 6 ];
const unique=numbers.filter(function(value,index,array){
    return array.indexOf(value) ===index;
})
console.log(unique)
