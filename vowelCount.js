// vowel check using only if condition

function countVowel(sentence){
    let count = 0;
    for(let i = 0; i < sentence.length; i++){
        let letter = sentence[i].toLowerCase();
        console.log(letter);
    }
    return count;
}
countVowel('Hello How are YOU ?');