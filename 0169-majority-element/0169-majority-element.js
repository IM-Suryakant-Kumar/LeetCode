/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    // approach 1
    // for(let val of nums) {
    //     let freq = 0;  
    //     for(let el of nums) {
    //         if(val === el) {
    //             freq++;
    //         }
    //     }
    //     if(freq > nums.length / 2) return val;
    // }

    // return -1;

    // approach 2
    nums.sort((a, b) => a - b);
    let freq = 0, ans = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i - 1]) {
            freq++;
        } else {
            freq = 1;
            ans = nums[i];
        }
        if(freq > nums.length / 2) return ans
    }
    
    return ans;
};