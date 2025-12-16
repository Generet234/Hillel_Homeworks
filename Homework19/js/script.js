'use strict';
const sum = 0;
/**
 * This script performs multiple analytical operations on a numeric array.
 *
 * The following computations are executed sequentially:
 *
 * 1. Calculates the sum of all positive numbers in the array and counts how many
 *    positive elements it contains.
 *
 * 2. Finds the minimum value in the array and determines its index.
 *
 * 3. Finds the maximum value in the array and determines its index.
 *
 * 4. Counts how many negative numbers are present in the array.
 *
 * 5. Counts how many positive odd numbers are present in the array.
 *
 * 6. Counts how many positive even numbers are present in the array.
 *
 * 7. Calculates the sum of all positive even numbers.
 *
 * 8. Calculates the sum of all positive odd numbers.
 *
 * 9. Calculates the product of all positive numbers in the array.
 *
 * 10. Locates the value `76` in the array and replaces:
 *     - all elements before it with zeros,
 *     - the value `76` and the next four elements with zeros.
 *
 * The script outputs the result of each operation to the console.
 *
 * Notes:
 * - Array mutation is used in the last operation (`splice`).
 * - Spread syntax (`...`) and `Array.fill()` are used for concise zero replacement.
 * - The script runs in strict mode.
 */

const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let count1 = 0;
let sum1 = 0;
for (let item of array) {
    if(item>0){
        sum1 = sum1 + item;
        count1++;
    }
}
console.log(sum1);
console.log(count1);
console.log('------');
// Expression 2
const min = Math.min(...array);
const indexMin = array.indexOf(min)
console.log(min, indexMin);
console.log('------');
// Expression 3
const max = Math.max(...array);
const indexMax = array.indexOf(max);
console.log(max,indexMax);
console.log('------');
// Expression 4
let count4 = 0;
for (const item of array){
    if (item < 0){
        count4++;
    }
}
console.log(count4);
console.log('------');
// Expression 5
let count5 = 0;
for (const item of array){
    if (item > 0 && item % 2 !== 0){
        count5++;
    }
}
console.log(count5);
console.log('------');
// Expression 6
let count6 = 0;
for(const item of array){
    if (item > 0 && item % 2 === 0){
        count6++;
    }
}
console.log(count6);
console.log('------');
// Expression 7
let sum7 =0;
for(const item of array){
    if (item > 0 && item % 2 === 0){
        sum7 += item;
    }
}
console.log(sum7);
console.log('------');
// Expression 8
let sum8 = 0;
for(let item of array){
    if (item >0 && item % 2 !== 0){
        sum8 = item + sum8;
    }
}
console.log(sum8);
console.log('------');
// Expression 9
let multiple9 = 1;
for(const item of array){
    if(item > 0){
        multiple9 = multiple9 * item;
    }
}
console.log(multiple9);
console.log('------');
// Expression 10
const array10 = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const index = array10.indexOf(76);

if (index !== -1) {
    array10.splice(index, 5, ...Array(5).fill(0)); // fill is a function which fill our elements
    array10.splice(0, index, ...Array(index).fill(0));
}

console.log(array10);
