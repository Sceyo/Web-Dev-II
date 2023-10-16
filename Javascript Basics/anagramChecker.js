function anagramChecker(sentence1, sentence2){
    let size1 = sentence1.length;
    let size2 = sentence2.length;

    let temp1 = sentence1.split(" ").sort().join(" ");
    let temp2 = sentence2.split(" ").sort().join(" ");

    if(temp1 == temp2){
        console.log(sentence1 + " is an anagram to " + sentence2);
    }else{
        console.log(sentence1 + " is not an anagram to " + sentence2);
    }
    

}

let anagram1 = anagramChecker("Verstappen","Hamilton");
let anagram2 = anagramChecker("Dog","Dog");