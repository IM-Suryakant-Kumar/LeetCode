/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let ans = "";
    let i = 0, j = 0;

    while(i < word1.length || j < word2.length) {
        if(word1[i]) ans += word1[i++];
        if(word2[j]) ans += word2[j++];
    }

    return ans;
};