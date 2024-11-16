/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let leftProd = 1;
    let rightProd = 1;
    let ans = nums[0];
    let n = nums.length;
    for(let i = 0; i < n; i++) {
        leftProd = leftProd === 0 ? 1 : leftProd;
        rightProd = rightProd === 0 ? 1 : rightProd;

        leftProd *= nums[i];
        rightProd *= nums[n - 1 - i];

        ans = Math.max(ans, Math.max(leftProd, rightProd))
    }

    return ans;
};
