// vowel check using only if condition

function countVowel(sentence){
    let count = 0;
    for(let i = 0; i < sentence.length; i++){
        let letter = sentence[i].toLowerCase();
        
        if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
            count++;
        }
    }
    return count;
}
console.log(countVowel('Hello How are YOU ?'));