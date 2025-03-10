/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Moore's Voting Algorithm
    let freq = 0, ans = 0;

    for(let i = 0; i < nums.length; i++) {
        if(freq === 0) {
            ans = nums[i];
        }

        freq += (ans === nums[i]) ? 1 : -1;
    }

    return ans;
};