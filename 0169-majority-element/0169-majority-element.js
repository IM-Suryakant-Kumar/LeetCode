/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    for(let val of nums) {
        let freq = 0;
        for(let el of nums) {
            if(val === el) {
                freq++;
            }
        }
        if(freq > nums.length / 2) {
            return val;
        }
    }

    return -1;
};