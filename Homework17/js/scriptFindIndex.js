'use strict';
const array = [2,4,6,8,15,60,7];
/**
 * Custom implementation of the `find` function.
 *
 * The function iterates through the array and executes a callback for each element.
 * If the callback returns a truthy value, that value is immediately returned.
 * If no element produces a truthy result, the function returns `false`.
 *
 * ❗ Note: Unlike the standard JavaScript `find`, this implementation expects
 * the callback to return *any truthy value* (e.g., a string), not a boolean.
 *
 * @param {Array} arr - The array to be iterated.
 * @param {Function} callback - A function called for each element.
 * @param {*} callback.item - The current array element.
 * @param {number} callback.i - The current index.
 * @param {Array} callback.arr - The original array.
 * @returns {*} Returns the value returned by callback if truthy, otherwise `false`.
 */
const functionFind = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i], i, arr);
        if(result) {
            return i;
        }
    }
    return -1;
}
const resultFunction = functionFind(array, (item, i, arr) => {
    if (arr[i] > 5){
        return true;
    }
});
console.log(resultFunction);
console.log('-----');
const array2 = [3,2,4,5,1,1,2];
const functionFind2 = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i], i, arr);
        if(result) {
            return i;
        }
    }
    return -1;
}
const resultFunction2 = functionFind2(array2, (item, i, arr) => {
    if (arr[i] > 5){
        return true;
    }
});
console.log(resultFunction2);