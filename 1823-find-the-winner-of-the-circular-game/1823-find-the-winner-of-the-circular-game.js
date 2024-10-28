/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    function josephus(n) {
        // base case
        if(n === 1) return 0;

        // recurssive case
        return (josephus(n - 1) + k) % n;
    }
    return josephus(n) + 1;
};