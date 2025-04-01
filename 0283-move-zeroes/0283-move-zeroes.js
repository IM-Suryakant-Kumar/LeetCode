/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let c = 0;

    for(let num of nums) if(num !== 0) nums[c++] = num;
    while(c < nums.length) nums[c++] = 0;
};