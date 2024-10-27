/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    const arr = Array.from({length: n}, (_, i) => i + 1);
    
    function helper(arr, startIdx) {
        // Base case
        if(arr.length === 1) return arr[0];
        // Recurssive case
        const idxToRemove = (startIdx + k - 1) % arr.length;
        arr.splice(idxToRemove, 1);
        return helper(arr, idxToRemove);
    }
    return helper(arr, 0);
};