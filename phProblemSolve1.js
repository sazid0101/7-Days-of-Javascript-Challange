function calculateMoney( ticketSale){
    const totalCost = (500+(8*50));
    const ticketSalePrice = ticketSale *120 ;
    const profit = ticketSalePrice - totalCost ;
    if(ticketSale < 0){
        return "Invalid Number"
    }

    // console.log(totalCost , ticketSalePrice)
    return profit;
}
function checkName(name){
    const lastLetter = name[name.length -1].toLowerCase() ;
    
    if(typeof name !== "string"){
        return "Invalid"
    }
    else if(lastLetter === "a" || lastLetter === "y" || lastLetter === "e" || lastLetter === "o" || lastLetter === "u" || lastLetter === "w"){
        return "Good Name" ;
    }
    else{
        return "Bad Name"
    }
}
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
function password(obj){
    
    console.log(`${obj.siteName}#${obj.name}@${obj.birthYear}`)

} 

console.log(calculateMoney(10)) ;
console.log(calculateMoney(1055)) ;
console.log(calculateMoney(93)) ;
console.log(calculateMoney(-130)) ;