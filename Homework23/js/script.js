'use strict';
/**
 * Flattens the globally defined array `arr` using an iterative algorithm.
 * The function removes empty slots and `undefined` values before processing.
 * It accepts a single numeric argument that represents the flattening depth.
 * If more than one argument is provided, an error is thrown.
 * During each iteration, nested arrays are expanded one level using the spread operator.
 * A temporary array is used to store intermediate results to avoid direct mutation.
 * The function assumes that `arr` exists in the outer scope and is an array.
 * The returned value is a new array that is flattened according to the given depth.
 */
const arr = [1,2, , 4,6,7, , [5,7,[3,[8]]]]
let arr2 = [];
function myFlat( num = 1,wrongVariable){
    if (Array.isArray(arr)){
        if (wrongVariable) {
            throw new Error('Function accepts only 1 argument, too much arguments provided');
        }
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
        return arr2;
    }
}

const result = myFlat(4);
console.log(result);