/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Optimised O(nlogn)
    nums.sort((a, b) => a - b);
    let freq = 1, ans = nums[0], n = nums.length;

    for(let i = 1; i < n; i++) {
        if(nums[i - 1] === nums[i]) {
            freq++;
        } else {
            freq = 1;
            ans = nums[i];
        }

        if(freq > n / 2) return ans;
    }

    return -1;
};