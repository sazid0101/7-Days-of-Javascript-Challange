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
console.log(calculateMoney(10)) ;
console.log(calculateMoney(1055)) ;
console.log(calculateMoney(93)) ;
console.log(calculateMoney(-130)) ;