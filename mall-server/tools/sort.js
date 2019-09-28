const handler =  module.exports = {};

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let left = [];
    let	right = [];
    let	baseDot = Math.round(arr.length / 2);
    let	base = arr.splice(baseDot, 1)[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < base) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat([base], quickSort(right));
}



handler.quickSort = function (arr) {
    return quickSort(arr);
}
