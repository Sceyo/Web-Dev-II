function arrayIntersection(arr1,arr2){
    let common = [];

    for(let element of arr1){
        if(arr2.includes(element)){
            common.push(element);
        }
    }

    return common;
}

let intersect = arrayIntersection([1,2,3,4,5,6,7,8,9,10,11,12],[2,4,6,8,10]);
console.log(intersect);