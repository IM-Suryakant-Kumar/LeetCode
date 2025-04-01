/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = "aeiouAEIOU";
    // strint to array
    s = s.split("");
    let l = 0, r = s.length - 1;

    while(l < r) {
        if(!(vowels.includes(s[l]))) l++;
        else if(!(vowels.includes(s[r]))) r--;
        else [s[l++], s[r--]] = [s[r], s[l]]; 
    }

    return s.join("");
};