'use strict';
const demoArray = [6,7,10];
/**
 * Custom implementation of `every`.
 *
 * This function iterates over the array and executes the callback for the first element only,
 * returning the result immediately.
 * ⚠ Note: This implementation does NOT check all elements like the standard `Array.prototype.every`.
 *
 * @param {Array} arr - Array to iterate over.
 * @param {Function} callback - Function executed on each element.
 * @param {*} callback.item - Current array element.
 * @param {number} callback.i - Current index.
 * @param {Array} callback.arr - Original array.
 * @returns {*} The value returned by the callback for the first element.
 */
const functionEvery = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        return callback(arr[i], i, arr);
    }
}
const resultFunction = functionEvery(demoArray, (item, i, arr) => {
    if (arr[i] > 5) {
        return true;
    } else {
        return false;
    }
});
console.log(resultFunction);
const demoArray2 = [2,4,10];
const functionEvery2 = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        return callback(arr[i], i, arr);
    }
}
const resultFunction2 = functionEvery2(demoArray2, (item, i, arr) => {
    if (arr[i] > 5) {
        return true;
    } else {
        return false;
    }
});
console.log(resultFunction2);