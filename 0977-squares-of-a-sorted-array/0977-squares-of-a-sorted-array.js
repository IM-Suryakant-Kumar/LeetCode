/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const newArr = new Array(nums.length).fill(0);
    let leftPointer = 0, rightPointer = nums.length - 1;
    for(let i = newArr.length - 1; i >= 0; i--) {
        const leftSquared = nums[leftPointer] ** 2;
        const rightSquared = nums[rightPointer] ** 2;
        if(leftSquared > rightSquared) {
            newArr[i] = leftSquared;
            leftPointer++;
        } else {
            newArr[i] = rightSquared;
            rightPointer--;
        }
    }
    newArr.sort((a, b) => a - b);
    return newArr;
};