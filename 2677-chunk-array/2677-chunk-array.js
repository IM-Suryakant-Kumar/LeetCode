/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const chunkArr = [];
  let i = 0;

  while (i < arr.length) {
    chunkArr.push(arr.slice(i, i + size));
    i += size;
  }

  return chunkArr;
};
