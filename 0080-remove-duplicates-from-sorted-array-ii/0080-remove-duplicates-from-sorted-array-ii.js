/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = nums.length;
    if(n < 2) return n;

    let k = 2;
    for(let i = 2; i < n; i++) {
        if(nums[k - 2] !== nums[i]) {
            nums[k++] = nums[i];
        }
    }

    return k;
};