function getUniqueElements(arr){
    //return Array.from(new Set(arr));
    let set= new Set(arr);

    let arrNew = Array.from(set);
    return arrNew;
}

let arr = ['a','b','b','c','d','e','a','1','d','z'];
let arrResult = getUniqueElements(arr);
console.log(arrResult);