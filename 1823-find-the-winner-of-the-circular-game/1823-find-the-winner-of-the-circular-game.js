/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    const arr = Array.from({length: n}, (_, i) => i + 1);

    function helperFunction(arr, startIndex) {
        if(arr.length === 1) return arr[0];

        const indexToRemove = (startIndex + k - 1) % arr.length;
        arr.splice(indexToRemove, 1);
        return helperFunction(arr, indexToRemove);
    }

    return helperFunction(arr, 0);
};