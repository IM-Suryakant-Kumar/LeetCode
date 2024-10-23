/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    if(n === 1) return 0;

    const length = 2 ** (n - 1);
    const mid = length / 2;
    if(k <= mid) {
        return kthGrammar(n - 1, k);
    } else {
        return 1 - kthGrammar(n - 1, k - mid)
    }
};