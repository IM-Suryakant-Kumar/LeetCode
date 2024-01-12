/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const resArr = [];
    for(let i = 0; i < arr.length; i++ ) {
        if(fn(arr[i], i)) {resArr.push(arr[i])}
    }
    return resArr;
};