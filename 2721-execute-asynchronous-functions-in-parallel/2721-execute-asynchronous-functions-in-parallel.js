/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    
    return new Promise((resolve, reject) => {
        const result = [];
        let pending = functions.length;
        functions.forEach(async (promise, idx) => {
            try {
                result[idx] = await promise();
                pending--;
                if(pending === 0) resolve(result)
            } catch(err) {
                reject(err)
            }
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */