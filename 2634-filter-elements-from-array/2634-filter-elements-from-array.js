/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const resArr = [];
    let i = 0;
    for(let val of arr) {
        if(fn(val, i++)) resArr.push(val)
    }
    return resArr;
};