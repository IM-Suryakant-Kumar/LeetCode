/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', "u"];
    // strint to array
    const strArr = s.split("");
    let l = 0, r = strArr.length - 1;

    while(l < r) {
        const leftChar = strArr[l].toLowerCase();
        const rightChar = strArr[r].toLowerCase();
        // move s and e character is not vowel
        if(!vowels.includes(leftChar)) l++;
        if(!vowels.includes(rightChar)) r--;

        if(vowels.includes(leftChar) && vowels.includes(rightChar)) {
            swap(strArr, l, r);
            l++;
            r--;
        }
    }

    return strArr.join("");

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
};