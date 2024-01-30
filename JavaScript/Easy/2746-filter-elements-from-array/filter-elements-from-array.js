/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const len = arr.length;
    for(let i = 0; i < len; i++ ) {
        if(fn(arr[0], i)) {
            arr.push(arr[0])
        }
        arr.shift()
    }
    return arr;
};