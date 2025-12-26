'use strict';
/**
 * Flattens an array up to a specified depth, removing undefined elements.
 *
 * @param {number} num - The depth level specifying how many times to flatten the array.
 * @param {*} [wrongVariable] - Optional second argument; if provided, the function throws an error.
 * @throws {Error} Throws an error if more than one argument is provided.
 * @returns {Array} The flattened array with undefined elements removed.
 *
 * @example
 * const arr = [1, 2, , 4, 6, 7, , [5, 7, [3, [8]]]];
 * const result = myFlat(2);
 * console.log(result); // Output: [1, 2, 4, 6, 7, 5, 7, 3, [8]]
 */
const arr = [1,2, , 4,6,7, , [5,7,[3,[8]]]]
let arr2 = [];
function myFlat(num ,wrongVariable){
        if (wrongVariable) {
            throw new Error('Function accepts only 1 argument, too much arguments provided');
        }
             arr2 = arr.filter((item) => item !== undefined);
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

                arr2 = temp;

         }
    return arr2;
}

const result = myFlat(4);
console.log(result);