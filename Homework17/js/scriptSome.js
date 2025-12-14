'use strict';
const array = [8,1,6];
/**
 * Custom implementation of the `some` method.
 *
 * The function iterates over each element of the array and executes the callback.
 * If the callback returns a truthy value for at least one element, the function
 * immediately returns `true`.
 * If the callback never returns a truthy value, the function returns `false`.
 *
 * @param {Array} arr - The array to iterate through.
 * @param {Function} callback - A function executed for every element.
 * @param {*} callback.item - Current element of the array.
 * @param {number} callback.i - Index of the current element.
 * @param {Array} callback.arr - The full array.
 * @returns {boolean} Returns `true` if callback returns a truthy value at least once, otherwise `false`.
 */
const functionSome = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
    }
    const resultFunction1 = functionSome(array, (item,i,arr) =>{
        if (arr[i]>5){
            return true;
        }
    })
console.log(resultFunction1);
const array2 = [2,2,3];
const functionSome2 = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}
const resultFunction2 = functionSome2(array2, (item,i,arr) =>{
    if (arr[i]>5){
        return true;
    }
})
console.log(resultFunction2);

