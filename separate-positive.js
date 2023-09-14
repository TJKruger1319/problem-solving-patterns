// add whatever parameters you deem necessary
function separatePositive(arr) {
    let front = 0
    let back = arr.length - 1;

    while(front < back) {
        if (arr[front] < 0 && arr[back] > 0) {
            [arr[front], arr[back]] = [arr[back], arr[front]]
            front++;
            back--;
        }
        if (arr[front] > 0) {
            front++;
        } else {
            back--;
        }
    }
    return arr;
}
