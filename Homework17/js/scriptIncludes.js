'use strict';
const checker = 7;
const array = [4,5,6];
/**
 * Checks whether the global variable `checker` exists in the given array.
 *
 * The function checks arr[i], arr[i+1] and arr[i+2] on each iteration.
 * Returns a message if the checker is found, otherwise `false`.
 *
 * @param {number[]} arr - The array to search in.
 * @returns {string|boolean} A message string if checker is found, otherwise false.
 */
const includes = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === checker || arr[i+1] === checker || arr[i+2] === checker) {
            return `Including the checker ${checker} is true`;
        }
        }

    return false;
}
console.log(includes(array));
const checker2 = 5;
const array2 = [4,5,6];

const includes2 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === checker2 || arr[i+1] === checker2 || arr[i+2] === checker2) {
            return `Including the checker ${checker2} is true`;
        }
    }

    return false;
}
console.log(includes2(array2));