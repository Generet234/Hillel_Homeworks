'use strict';
const array = [4,6,62,67,18,93];
/**
 * Custom implementation of an array shift operation using a callback.
 *
 * Iterates over the array and executes the provided callback for each element.
 * If the callback returns a truthy value and the first element of the array exists,
 * the function immediately returns the value produced by the callback.
 *
 * ⚠ Important notes:
 * - This is NOT a full implementation of `Array.prototype.shift`.
 * - The logic removes the first element by manually rebuilding the array
 *   using hardcoded indices.
 * - The implementation assumes the array has a fixed length of 6 elements.
 * - The original array is not mutated; instead, a new array is returned.
 * - The loop effectively runs only once because of the immediate `return`.
 *
 * @param {Array<number>} arr - The source array to process.
 * @param {Function} callback - A function executed for each element.
 * @param {*} callback.item - Current array element.
 * @param {number} callback.index - Current element index.
 * @param {Array<number>} callback.array - The original array.
 *
 * @returns {Array<number>|undefined}
 * Returns a new array without the first element if the callback returns
 * a truthy value, otherwise returns `undefined`.
 */

const functionShift = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i],i,arr);
         if (result && arr[0]) {
             return result;
         }
    }
    return undefined;
}
const resultFunction1 = functionShift(array, (item,i,arr) =>{
    if (arr[0]){
        arr = [arr[i+1],arr[i+2],arr[i+3],arr[i+4],arr[i+5]];
        return arr;
    }
    else {
        return undefined;
    }
})
console.log(resultFunction1);
console.log('-----');
const array2 = [14,65,622,657,148,938];
const functionShift2 = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i],i,arr);
        if (result && arr[0]) {
            return result;
        }
    }
    return undefined;
}
const resultFunction2 = functionShift2(array2, (item,i,arr) =>{
    if (arr[0]){
        arr = [arr[i+1],arr[i+2],arr[i+3],arr[i+4],arr[i+5]];
        return arr;
    }
    else {
        return undefined;
    }
})
console.log(resultFunction2);