const rollNumbers=[2,7,3,9,10,6,1,8,4,5,11]
const copyArray=[...rollNumbers]
console.log(copyArray.sort(function(a,b){
    return a-b;
}))
console.log(rollNumbers)