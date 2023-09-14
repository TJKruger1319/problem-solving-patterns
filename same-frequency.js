// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    num1digits = [num1].toString().split('').length;
    num2digits = [num2].toString().split('').length;

    if (num1digits === num2digits) {
        return true;
    }
    return false;
}

