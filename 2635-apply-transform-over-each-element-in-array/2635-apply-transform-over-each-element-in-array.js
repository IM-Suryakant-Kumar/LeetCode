/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArr = []
    let i = 0;
    for(let val of arr) {
        newArr.push(fn(val, i++))
    }
    return newArr;
};