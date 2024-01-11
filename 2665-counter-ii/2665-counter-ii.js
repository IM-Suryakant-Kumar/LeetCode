/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
let n;
var createCounter = function(init) {
    let n = init;
    return {
        increment: () => ++n,
        reset: () => n = init,
        decrement: () => --n,
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */