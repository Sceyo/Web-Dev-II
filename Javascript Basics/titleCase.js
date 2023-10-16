function titleCase(sentence){
    const smallWords = ["and","the","in","on","is","of"];

    const words = sentence.toLowerCase().split(" ");
    const titleCaseWords = words.map((word, index) => {
        if(index == 0 || !smallWords.includes(word)){
            return word.charAt(0).toUpperCase() + word.slice(1);
        }else{
            return word;
        }

    });
    return titleCaseWords.join(" ");
}

let sentence = titleCase("hello, this is my sample sentence and i hope it works.");
console.log(sentence);