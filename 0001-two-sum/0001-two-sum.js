/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const track = new Map();
    for(let i = 0; i < nums.length; i++) {
        let firstEle = nums[i];
        let secondEle = target - firstEle;
        if(track.has(secondEle)) return [track.get(secondEle), i];
        track.set(firstEle, i);
    }
    return;
};