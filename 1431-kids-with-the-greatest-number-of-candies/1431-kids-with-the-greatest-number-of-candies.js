/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies);

    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= maxCandies) candies[i] = true;
        else candies[i] = false;
    }

    return candies;
};