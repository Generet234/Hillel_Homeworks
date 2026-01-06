'use strict';
/**
 * Flattens an array by repeatedly expanding nested arrays into a single-level array.
 *
 * The function accepts only one argument and throws an error if more arguments are passed.
 * It removes `undefined` values from the array before flattening.
 *
 * The flattening logic is implemented using iterative loops instead of recursion.
 *
 * @param {Array} arr
 * The array that may contain nested arrays and empty slots.
 *
 * @returns {Array}
 * A new flattened array with all nested arrays expanded and `undefined` values removed.
 *
 * @throws {Error}
 * Throws an error if more than one argument is provided.
 */

const arr = [1,2, , [4,[6],7], , [5,7,[3,[[8]]]]]
function myFlat(arr){
    let arr2 = [];
    if (Array.isArray(arr)){
         if (arguments[1]) {
             throw new Error('Function accepts only 1 argument, too much arguments provided');
         }
    for (let num = 0; num<arr.length; num++) {
        arr2 = arr.filter((item) => item !== undefined);
        if (num >=0 || String(num).trim().length === 0){
            for (let i = 0; i < num; i++) {
                let temp = [];
                for( const item of arr2){
                    if (Array.isArray(item)){
                        temp.push(...item);
                    }
                    else {
                        temp.push(item);
                    }
                }

                arr2 = [...temp];

            }
        }
    }
    }
    return arr2;
}

const result = myFlat(arr);
console.log(result);