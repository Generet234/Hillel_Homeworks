'use strict';
const array = [3,4,21,5,9,16,74];
/**
 * Custom implementation of the `find` function.
 *
 * The function goes through each element of the array and executes the callback.
 * If the callback returns a *truthy* value, this value is immediately returned.
 * If the callback never returns a truthy value, the function returns `false`.
 *
 * ⚠ Note: This implementation differs from the standard Array.prototype.find.
 * Here, the callback is expected to return the *final result* (e.g., a string),
 * not a boolean indicating whether the element matches.
 *
 * @param {Array} arr - The array to iterate over.
 * @param {Function} callback - A function called for each array element.
 * @param {*} callback.item - The current element of the array.
 * @param {number} callback.i - The index of the current element.
 * @param {Array} callback.arr - The array being iterated.
 * @returns {*} The truthy value returned by the callback, or `false` if none found.
 */
const functionFind = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i], i, arr);
        if(result) {
            return result;
        }
    }
    return false;
}
const resultFunction = functionFind(array, (item, i, arr) => {
    if (arr[i] > 5){
        return arr[i];
    }
    else{
        return undefined;
    }
});
console.log(resultFunction);
console.log('------');
const array2 = [3,1,2,4,5,2,4];
const functionFind2 = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i], i, arr);
        if(result) {
            return arr[i];
        }
    }
    return false;
}
const resultFunction2 = functionFind2(array2, (item, i, arr) => {
    if (arr[i] > 5){
        return true;
    }
    else{
        return undefined;
    }
});
console.log(resultFunction2);


