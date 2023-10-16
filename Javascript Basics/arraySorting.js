function sortArray(arr){
    return arr.sort((a,b) => {
        return a-b;
    });
}

let arr = [6,7,1,2,9,8,11,0,45,3];
let retVal = sortArray(arr);
console.log(retVal);