'use strict';
const array = [4,6,62,67,18,93,432];

/**
 * Custom implementation of Array.prototype.shift().
 *
 * Removes the first element from the array, shifts all remaining elements
 * one position to the left, and decreases the array length by one.
 *
 * ⚠ This function MUTATES the original array.
 *
 * @param {Array} arr - The array to shift elements from.
 * @returns {*} The removed first element of the array.
 *
 * @example
 * const arr = [1, 2, 3];
 * const first = functionShift(arr);
 * // first === 1
 * // arr === [2, 3]
 */
const functionShift = (arr) => {
    const firstElement = arr[0];
    for (let i = 0; i < arr.length ; i++) {
        arr[i] = arr[i+1];
    }
    arr.length--;
    return firstElement;
}
const resultFunction1 = functionShift(array)
console.log(resultFunction1);
console.log('-----');
const array2 = [24,64,652,637,181,953,4432,34,4];
const functionShift2 = (arr) => {
    const firstElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.length--;
    return firstElement;
}
const resultFunction2 = functionShift2(array2)
console.log(resultFunction2);