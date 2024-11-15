/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const ans = new Array(nums.length).fill(0);
    // prefix
    let pre = 1;
    for(let i = 0; i < nums.length; i++) {
        ans[i] = pre;
        pre *= nums[i];
    }
    // postfix
    let post = 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        ans[i] *= post;
        post *= nums[i];
    }
    return ans;
};