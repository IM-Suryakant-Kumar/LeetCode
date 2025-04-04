/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let l = r = 0, res = 0;

    while(r < nums.length - 1) {
        let farthest = 0;
        for(let i = l; i <= r; i++) {
            farthest = Math.max(i + nums[i], farthest);
        }
        l = r + 1;
        r = farthest;
        res++;
    }

    return res;
};