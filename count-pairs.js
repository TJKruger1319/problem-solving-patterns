// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let counter = 0;

    while (start < end) {
        arr.sort((a, b) => a - b);
        let sum = arr[start] + arr[end]
        if (sum === target) {
            counter++;
            start++;
            end--;
        } else if (sum > target) {
            start++;
        } else {
            end--;
        }
    }
    return counter;
}

console.log(countPairs([3,1,5,4,2], 6));