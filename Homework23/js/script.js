'use strict';
/**
 * The myFlat function is designed to flatten an array to a specified depth.
 * It accepts an array arr and a number num that defines how many nesting levels should be flattened, with a default value of 1.
 * Inside the function, it checks that the first argument is an array and throws an error if extra arguments are passed via the wrongVariable parameter.
 * Before processing, all undefined values are removed from the array.
 * Then the function iterates num times, flattening nested arrays one level at a time while preserving the order of elements.
 * As a result, the function returns a new array arr2 with a flattened structure, and if the input argument is not an array, nothing is returned.
 */
const arr = [1,2, , 4,6,7, , [5,7,[3,[8]]]]
let arr2 = [];
function myFlat(arr, num = 1,wrongVariable){
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

                arr2 = temp;

            }
        }
        return arr2;
    }
}

const result = myFlat(arr, 4);
console.log(result);