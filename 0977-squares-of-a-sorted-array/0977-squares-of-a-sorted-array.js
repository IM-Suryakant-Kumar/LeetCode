/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const ans = new Array(nums.length).fill(0);
    for(let i = 0; i < nums.length; i++) {
        ans[i] = Math.pow(nums[i], 2);
    }
    return ans.sort((a, b) => a - b)
};