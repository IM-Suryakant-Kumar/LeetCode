/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 1;

    for(let num of nums) {
        if(nums[i - 1] !== num) {
            nums[i++] = num;
        }
    }

    return i;
};