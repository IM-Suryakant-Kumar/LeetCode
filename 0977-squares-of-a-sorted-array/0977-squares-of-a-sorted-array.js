/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // // Approach 1
    // const ans = new Array(nums.length).fill(0);
    // for(let i = 0; i < nums.length; i++) {
    //     ans[i] = Math.pow(nums[i], 2);
    // }
    // return ans.sort((a, b) => a - b)

    // Approach 2
    const ans = new Array(nums.length).fill(0);
    let leftPointer = 0, rightPointer = nums.length - 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        const leftSquared = nums[leftPointer] ** 2;
        const rightSquared = nums[rightPointer] ** 2;
        if(leftSquared > rightSquared) {
            ans[i] = leftSquared;
            leftPointer++;
        } else {
            ans[i] = rightSquared;
            rightPointer--;
        }
    }
    return ans;
};