function findVowelConsonent(stringg){

    let vowel=0;
    let consonent=0;
    let others=0;

    for(i=0;i<stringg.length;i++){
        let char= stringg[i].toLowerCase();
        if(char==='a'||char==='e'|| char==='i'|| char==='o'|| char==='u'){
            vowel=vowel+1;
        }else if(char!==" "  && char!=="." && char!==","){
            consonent++
        }else{
            others++
        }
    }
    const count={
        vowelCount:vowel,
        consonentCount:consonent,
        othersCount:others
    }
    return count;
}
const arrayName="Hafsa is A good hearted person,sazid loves her very much."
console.log(findVowelConsonent(arrayName))
