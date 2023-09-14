// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let newMap = new Map();

    for (i in arr1) {
        newMap.set(arr1[i], arr2[i]);
    }

    return newMap;
}

console.log(twoArrayObject(['a','b','c', 'd'], [1,2,3,4,5]))