/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k %= n;

    // reverse whole nums
    reverseNums(0, n - 1);
    // reverse 0 to k - 1
    reverseNums(0, k - 1);
    // reverse k to n - 1
    reverseNums(k, n - 1);
    
    function reverseNums(s, e) {
        while(s < e) {
            let temp = nums[s];
            nums[s++] = nums[e];
            nums[e--] = temp;
        }
    }
};