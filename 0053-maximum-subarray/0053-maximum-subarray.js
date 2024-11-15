/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let largestSum = nums[0];
    let totalSum = 0;
    for(let val of nums) {
        if(totalSum < 0) {
            totalSum = 0;
        }
        totalSum += val;
        if(totalSum > largestSum) {
            largestSum = totalSum;
        }
    }
    return largestSum;
};