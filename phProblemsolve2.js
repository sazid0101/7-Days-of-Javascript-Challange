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
console.log(checkName("salman"))
console.log(checkName("RAFEE"))
console.log(checkName(["rashed"]))