/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const ans = new Array(nums.length).fill(0);
    let l = 0, r = nums.length - 1;
    
    for(let i = nums.length - 1; i >= 0; i--) {
        const leftEle = nums[l] ** 2;
        const rightEle = nums[r] ** 2;

        if(leftEle > rightEle) {
            ans[i] = leftEle;
            l++;
        } else {
            ans[i] = rightEle;
            r--;
        }
    }

    return ans;
};