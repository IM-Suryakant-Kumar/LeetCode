/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if(nums.length === 0) return true;
    
    const first = nums[0], last = nums[nums.length - 1];
    if(first === last) {
        for(let i = 1; i < nums.length; i++) {
            if(nums[i - 1] !== nums[i]) return false;
        }
    } else if(first < last) {
        // non-decreasing
        for(let i = 1; i < nums.length; i++) {
            if(nums[i - 1] > nums[i]) return false;
        }
    } else {
        // non-increasing
        for(let i = 1; i < nums.length; i++) {
            if(nums[i - 1] < nums[i]) return false;
        }
    }
    
    return true;
};