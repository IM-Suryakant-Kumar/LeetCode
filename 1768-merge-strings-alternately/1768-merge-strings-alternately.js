/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let ans = "", i = 0;

    while (i < word1.length || i < word2.length) {
        ans += (word1[i] ?? "") + (word2[i++] ?? "");
    }

    return ans;
};