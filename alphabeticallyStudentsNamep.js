const studentsName=['hafsa',"sazid",'amit','tanzina'];

// console.log(studentsName.sort())    //sort korle main array change hoye jacce.
 

let copyArray=[...studentsName].sort() //tai main array ke copy korlam & sort. 

console.log(copyArray)
console.log(studentsName) 