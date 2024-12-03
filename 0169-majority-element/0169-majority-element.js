/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = 0, ans = 0;

    for(let i = 0; i < nums.length; i++) {
        if(freq === 0 ) {
            ans = nums[i]
        }

        if(nums[i] === ans) {
            freq++;
        } else {
            freq--;
        }
    }

    return ans;
};