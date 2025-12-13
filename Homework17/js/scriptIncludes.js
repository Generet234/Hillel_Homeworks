'use strict';
const checker = 6;
const array = [4,5,6];
/**
 * Custom implementation of the `includes` function.
 *
 * The function iterates over each element of the array and executes the callback.
 * If the callback returns a *truthy* value, this value is immediately returned.
 * If the callback never returns a truthy value, the function returns `false`.
 *
 * ⚠ Note: This implementation differs from the standard Array.prototype.includes.
 * Here, the callback is expected to return the *final result* (for example, a string),
 * not a boolean indicating whether the element exists in the array.
 *
 * @param {Array} arr - The array to iterate over.
 * @param {Function} callback - A function executed for each array element.
 * @param {*} callback.item - The current element of the array.
 * @param {number} callback.i - The index of the current element.
 * @param {Array} callback.arr - The array being iterated.
 * @returns {*} The truthy value returned by the callback, or `false` if none found.
 */
const includes = (arr,callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return callback(arr[i], i, arr);
        }
        }

    return false;
}
const resultIncludes = includes(array, (item, i, arr) => {
    if (arr[i] === checker || arr[i+1] === checker || arr[i+2] === checker) {
        return `Including the checker ${checker} is true`;
    }
});
console.log(resultIncludes);
const checker2 = 7;
const array2 = [4,5,6];

const includes2 = (arr,callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return callback(arr[i], i, arr);
        }
    }

    return false;
}
const resultIncludes2 = includes2(array2, (item, i, arr) => {
    if (arr[i] === checker2 || arr[i+1] === checker2 || arr[i+2] === checker2) {
        return `Including the checker ${checker2} is true`;
    }
});
console.log(resultIncludes2);