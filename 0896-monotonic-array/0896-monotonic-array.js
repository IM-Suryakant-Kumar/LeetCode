/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    const first = nums[0];
    const last = nums[nums.length - 1];
    if(first === last) {
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] !== nums[i + 1]) return false;
        }
    } else if(first < last) {
        // non-decreasing
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] > nums[i + 1]) return false;
        }
    } else {
        // non-increasing
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] < nums[i + 1]) return false;
        }
    }
    return true
};