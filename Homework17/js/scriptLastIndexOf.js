'use strict';
const array = [6,5,3,9,4,5,6];
const checker = 4;
/**
 * Universal index-search function with custom validation logic.
 *
 * The function iterates over the `arr` array and calls the provided `callback`
 * for each element with arguments (item, index, array). If the callback returns
 * `true`, the returned index depends on the value of the external `checker` variable:
 *
 * - if `checker === 5`, the function returns `i + 5`;
 * - if `checker === 6`, the function returns `i + 6`;
 * - if `checker` is neither 5 nor 6, the function returns the current index `i`.
 *
 * If the callback never returns `true`, the function returns `false`.
 *
 * ⚠️ Note: This function relies on the external variable `checker`,
 * which makes it dependent on external state and not a pure function.
 *
 * @param {number[]} arr Array of numbers to iterate over
 * @param {(item: number, index: number, array: number[]) => boolean} callback
 * Validation function for each array element
 * @returns {number|boolean} Computed index or `false` if no match is found
 */

const functionString = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i], i, arr);
        if(result){
            if(checker === 5) {
                return i+5;
            }
            if(checker === 6) {
                return i+6;
            }
            else if (checker !==  5 && checker !== 6) {
                return i;
            }
        }
    }
    return false;
}
const resultFunctionString = functionString(array, (item, i, arr) => {
    if (checker === 5 && arr[i+1] === arr[i+5]) {
        return true ;
    }
    else if (checker === 6 && arr[i] === arr[i+6]) {
        return true;
    }
    else if (checker === arr[i]) {
        return true;
    }
    else{
        return false;
    }
});
console.log(resultFunctionString);
console.log('-----');
const array2 = [4,5,23,79,4,5,6];
const checker2 = 79;

const functionString2 = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i], i, arr);
        if(result){
            if(checker2 === 4) {
                return i+4;
            }
            if(checker2 === 5) {
                return i+5;
            }
            else if (checker2 !==  5 && checker2 !== 4) {
                return i;
            }
        }
    }
    return false;
}
const resultFunctionString2 = functionString2(array2, (item, i, arr) => {
    if (checker2 === 5 && arr[i+1] === arr[i+5]) {
        return true ;
    }
    else if (checker2 === 4 && arr[i] === arr[i+4]) {
        return true;
    }
    else if (checker2 === arr[i]) {
        return true;
    }
    else{
        return false;
    }
});
console.log(resultFunctionString2);