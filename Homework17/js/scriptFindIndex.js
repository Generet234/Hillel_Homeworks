'use strict';
const array = [1,2,3,4,5,6,7];
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
        if(callback(arr[i], i, arr)) {
            return callback(arr[i],i,arr);
        }
    }
    return false;
}
const resultFunction = functionFind(array, (item, i, arr) => {
    if (arr[i]){
        return `Number ${arr[i]} has this index ${i}`;
    }
    else{
        return -1;
    }
});
console.log(resultFunction);
console.log('-----');
const array2 = [3,8,7,5,10,16,72];
const functionFind2 = (arr, callback) => {
    for (let i = 4; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            return callback(arr[i],i,arr);
        }
    }
    return false;
}
const resultFunction2 = functionFind2(array2, (item, i, arr) => {
    if (arr[i]){
        return `Number ${arr[i]} has this index ${i}`;
    }
    else{
        return -1;
    }
});
console.log(resultFunction2);