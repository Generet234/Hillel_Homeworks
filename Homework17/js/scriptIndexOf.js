'use strict';
const arr = [2,5,7];
const checker = 2;
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
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i], i, arr);
        if (result) {
            return i;
        }
    }
    return -1;
}
const resultFunction = indexOf(arr, (item, i, arr) => {
    if(checker === arr[i]){
        return true;
    }
});
console.log(resultFunction);
console.log('-----');
// const arr2 = [8,5,6];
// const checker2 = 2;
// const indexOf2 = (arr, callback) => {
//     for (let i = 0; i < arr.length; i++) {
//         const result = callback(arr[i], i, arr);
//         if (result !== -1) {
//             return result;
//         }
//     }
//     return -1;
// }
// const resultFunction2 = indexOf2(arr2, (item, i, arr) => {
//     if(checker2 === arr[i]){
//         return i;
//     }
// });
//console.log(resultFunction2);
