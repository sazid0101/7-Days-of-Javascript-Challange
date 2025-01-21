function longestString(names){
    let longestWord = '';
    for(name of names){
        if(name.length> longestWord.length){
            longestWord = name;
        }
    }
    return [longestWord , names.indexOf(longestWord)]
}

const stringIs = ['sazid','shahriar','bangladesh','islam'];
console.log(longestString(stringIs));