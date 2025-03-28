/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let papers = citations.length;
    let citationBuckets = new Array(papers + 1).fill(0);

    for(let citation of citations) {
        citationBuckets[Math.min(citation, papers)] += 1;
    }

    let cumulativePapers = 0;
    for(let hIndex = papers; hIndex >= 0; hIndex--) {
        cumulativePapers += citationBuckets[hIndex];
        if(cumulativePapers >= hIndex) {
            return hIndex;
        }
    }
};