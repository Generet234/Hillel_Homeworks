'use strict';
const array = [4,7,622,657,118,953];
/**
 * Custom implementation of an array reverse operation using a callback.
 *
 * Iterates over the array and executes the provided callback for each element.
 * If the callback returns a truthy value, the function creates and returns
 * a new array with elements placed in reverse order (based on hardcoded indices).
 *
 * ⚠ Important notes:
 * - This is NOT a generic or safe implementation of `Array.prototype.reverse`.
 * - The reverse logic is hardcoded for an array of length 6.
 * - The original array is not truly reversed dynamically.
 * - The `while` loop is redundant because it always reassigns `arr`
 *   and exits immediately via `return`.
 *
 * @param {Array<number>} arr - The source array to process.
 * @param {Function} callback - A function executed for each element.
 * @param {*} callback.item - Current array element.
 * @param {number} callback.index - Current element index.
 * @param {Array<number>} callback.array - The original array.
 *
 * @returns {Array<number>|undefined}
 * Returns a new reversed array if the callback returns a truthy value,
 * otherwise returns `undefined`.
 */

const functionReverse = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i],i,arr);
        while (arr = [arr[i+5],arr[i+4],arr[i+3],arr[i+2],arr[i+1],arr[i]]){
            if (result){
                return arr;
            }
        }
    }
    return undefined;
}
const resultFunction1 = functionReverse(array, (item,i,arr) =>{
    if (arr[i] && i === 0){
        arr = [arr[i+5],arr[i+4],arr[i+3],arr[i+2],arr[i+1],arr[i]];
        return arr;
    }
    else {
        return undefined;
    }
})
console.log(resultFunction1);
console.log('------');
const array2 = [14,723,6422,6517,1518,9583];

const functionReverse2 = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i],i,arr);
        while (arr = [arr[i+5],arr[i+4],arr[i+3],arr[i+2],arr[i+1],arr[i]]){
            if (result){
                return arr;
            }
        }
    }
    return undefined;
}
const resultFunction2 = functionReverse2(array2, (item,i,arr) =>{
    if (arr[i] && i === 0){
        arr = [arr[i+5],arr[i+4],arr[i+3],arr[i+2],arr[i+1],arr[i]];
        return arr;
    }
    else {
        return undefined;
    }
})
console.log(resultFunction2);