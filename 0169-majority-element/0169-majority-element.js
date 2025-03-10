/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = 0, ans = 0;

    for(const num of nums) {
        if(freq === 0) {
            ans = num;
        }

        freq += (num === ans) ? 1 : -1;
    }

    return ans; 
};