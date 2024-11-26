/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const track = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(track.has(nums[i])) return true;
        track.add(nums[i]);
    }
    return false;
};