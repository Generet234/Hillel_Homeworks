'use strict';
const arr = [1,5,7];
/**
 * Custom implementation of `indexOf`.
 *
 * Iterates over the array starting from index 1 and executes the callback
 * for the first element only (because of the immediate return inside the loop).
 * Returns whatever the callback returns for that element.
 *
 * ⚠ Note: This is NOT a full implementation of `Array.prototype.indexOf`,
 * it only returns the result of the callback for the first element iterated.
 *
 * @param {Array} arr - The array to iterate.
 * @param {Function} callback - Function executed on each element.
 * @param {*} callback.item - Current array element.
 * @param {number} callback.i - Index of the current element.
 * @param {Array} callback.arr - The full array.
 * @returns {*} Returns the value returned by the callback.
 */
const indexOf = (arr, callback) => {
    for (let i = 1; i < arr.length; i++) {
        return callback(arr[i], i, arr);
    }
}
const resultFunction = indexOf(arr, (item, i, arr) => {
    const number = Number(arr[i]);
    return `Number ${number} has an index ${i}`;
});
console.log(resultFunction);
console.log('-----');
const arr2 = [6,9,71];
const indexOf2 = (arr, callback) => {
    for (let i = 1; i < arr.length; i++) {
        return callback(arr[i], i, arr);
    }
}
const resultFunction2 = indexOf2(arr2, (item, i, arr) => {
    const number = Number(arr[i]);
    return `Number ${number} has an index ${i}`;
});
console.log(resultFunction2);

