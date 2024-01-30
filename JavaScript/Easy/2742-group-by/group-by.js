/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  const result = {};

    this.forEach(i => {
        if(result[fn(i)]) result[fn(i)].push(i);
        else result[fn(i)] = [i]
    })

  return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
