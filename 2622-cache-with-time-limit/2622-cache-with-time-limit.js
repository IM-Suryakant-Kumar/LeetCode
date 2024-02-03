class TimeLimitedCache {
    cache = new Map();

    set (key, value, duration) {
        const alreadyExists = this.cache.get(key);
        if(alreadyExists) 
            clearTimeout(alreadyExists.timeoutId);
        const timeoutId = setTimeout(() => this.cache.delete(key), duration);
        this.cache.set(key, { value, timeoutId });
        return Boolean(alreadyExists)
    }

    get (key) {
        return this.cache.has(key) ? this.cache.get(key).value : -1
    }

    count () {
        return this.cache.size;
    }
}

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */

/** 
 * @param {number} key
 * @return {number} value associated with key
 */


/** 
 * @return {number} count of non-expired keys
 */


/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */