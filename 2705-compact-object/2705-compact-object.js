/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (typeof obj === "object") {
        if (Array.isArray(obj)) {
            const tempArr = [];
            for (let i = 0; i < obj.length; i++) {
                if (Boolean(obj[i])) {
                    tempArr.push(compactObject(obj[i]));
                }
            }
            return tempArr;
        } else {
            const tempObj = {};
            for (const key in obj) {
                if (Boolean(obj[key])) {
                    tempObj[key] = compactObject(obj[key]);
                }
            }

            return tempObj;
        }
    }

    return obj;
};
