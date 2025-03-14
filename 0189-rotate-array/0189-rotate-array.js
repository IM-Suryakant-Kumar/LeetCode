/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    
    // reverse first part
    reverseNums(0, n - k - 1);
    // reverse second part
    reverseNums(n - k, n - 1);
    // reverse whole nums
    reverseNums(0, n - 1);
    
    function reverseNums(s, e) {
        while(s < e) {
            let temp = nums[s];
            nums[s++] = nums[e];
            nums[e--] = temp;
        }
    }
};