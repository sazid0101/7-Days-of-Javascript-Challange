const vowels=["a","e","i","o","u","A","E","I","O","u"]
function countVowels(sentence){
    let count=0;
    const sentenceLetters=Array.from(sentence);
    sentenceLetters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    })
    return count;
}
console.log(countVowels("i love bangladesh so much aaaA"))