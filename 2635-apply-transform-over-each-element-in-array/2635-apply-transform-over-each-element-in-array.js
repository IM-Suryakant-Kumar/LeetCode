/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArr = []
    
    arr.forEach((i, idx) => {
        newArr.push(fn(i, idx))
    })
    
    return newArr;
};