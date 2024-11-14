/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const track = {};
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in track) return true;
        track[nums[i]] = i;
    }
    return false;
};