/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    nums.sort((a, b) => a - b);
    let freq = 1, ans = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(nums[i - 1] === nums[i]) {
            freq++;
        } else {
            freq = 1;
            ans = nums[i]
        }

        if(freq > nums.length / 2) return ans;
    }

    return ans;
};