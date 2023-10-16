function findLongestWord(sentence) { 
    const words = sentence.split(" ");

    let longestWord = words[0];

    for( let i = 0; i < words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }

    return longestWord;
}

const result = findLongestWord("Hello, World CIS 2102");
console.log(result);