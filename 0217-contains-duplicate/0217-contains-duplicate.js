/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // // Approach 1
    // nums.sort((a, b) => a - b);
    // for(let i = 1; i < nums.length; i++) {
    //     if(nums[i - 1] === nums[i]) return true;
    // }
    // return false;

    // // Approach 2
    // const track = {};
    // for(let i = 0; i < nums.length; i++) {
    //     if(nums[i] in track) return true;
    //     track[nums[i]] = i;
    // }
    // return false;

    // Approach 3
    const track = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(track.has(nums[i])) return true;
        track.add(nums[i]);
    }
    return false;
};