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
    for (let i = 0; i < arr.length; i++) { // 10 is a number which is not based on anything
        const result = callback(arr[i], i, arr);
        if (result) {
            return true;
        }
        }

    return false;
}
const resultIncludes = includes(array, (item, i, arr) => {
    if (checker === arr[i]) {
        return true;
    }
});
console.log(resultIncludes);
console.log('-----');
const checker2 = 3;
const array2 = [4,5,6];

const includes2 = (arr,callback) => {
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i], i, arr);
        if (result) {
            return true;
        }
    }

    return false;
}
const resultIncludes2 = includes2(array2, (item, i, arr) => {
    if (checker2 === arr[i]) {
        return true;
    }
});
console.log(resultIncludes2);