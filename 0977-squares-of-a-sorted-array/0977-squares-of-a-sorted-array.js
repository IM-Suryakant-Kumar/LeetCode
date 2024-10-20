/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const newArr = [];

    for(let val of nums) {
        newArr.push(val * val);
    }
    
    newArr.sort((a, b) => a - b);

    return newArr;
};