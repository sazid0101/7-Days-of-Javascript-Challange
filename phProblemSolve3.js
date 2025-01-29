function deleteInvalids(array){
    
    if(!Array.isArray(array)){
        return "Invalid Array"
    }

    const numArray =[];
    for(const arrayElement of array){
         if(typeof arrayElement === "number" && !Number.isNaN(arrayElement)){
            numArray.push(arrayElement)
        }
    }
    return numArray;
}
const myArray = [NaN, 2, 6, null, 7, undefined, {name:"sazid"}]
const myObj = {
    name:"shahriar",
    age:25
}
console.log(deleteInvalids(myArray))
console.log(deleteInvalids(myObj))