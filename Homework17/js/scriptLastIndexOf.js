'use strict';
const string = 'Hello World!';
/**
 * Custom implementation of a string iterator similar to `find`.
 *
 * The function iterates over each character of the string and executes the callback.
 * If the callback returns a *truthy* value, that value is immediately returned.
 * If the callback never returns a truthy value, the function returns `false`.
 *
 * ⚠ Note: This implementation differs from the standard `Array.prototype.find`.
 * Here, the callback is expected to return the *final result* (for example, a string),
 * not a boolean indicating whether the element matches a condition.
 *
 * @param {string} str - The string to iterate over.
 * @param {Function} callback - A function called for each character.
 * @param {string} callback.item - The current character of the string.
 * @param {number} callback.i - The index of the current character.
 * @param {string} callback.str - The string being iterated.
 * @returns {*} The truthy value returned by the callback, or `false` if none is found.
 */
const optionLetter = ' '? string[9] : string [3] || string[4];
const optionLetter2 = ' '? string[7] : string [5];
const functionString = (str, callback) => {
    for (let i = 1; i < str.length; i++) {
        if(callback(str[i], i, str)){
            return callback(str[i],i,str);
        }
    }
    return false;
}
const resultFunctionString = functionString(string, (item, i, str) => {
    if (typeof i === 'number' && i !== 2 && i !== 3 && i !== 5 ) {
        return `The last use of ${string[i]} is ${[i]} `;
    }
    else if (optionLetter || i === 2 || i === 3) {
        return `The last use of ${optionLetter} is 9 `;
    } else if (optionLetter2 || i === 5) {
        return `The last use of ${optionLetter2} is 7  `;
    }  else {
        return false;
    }
});
console.log(resultFunctionString);

const string2 = 'Hello friends!';
const optionLetter3 = ' '? string2[2] : string2[3];
const functionString2 = (str, callback) => {
    for (let i = 6; i < str.length; i++) {
        if(callback(str[i], i, str)){
            return callback(str[i],i,str);
        }
    }
    return false;
}
const resultFunctionString2 = functionString2(string2, (item, i, str) => {
    if (typeof i === 'number' && i !== 2 && i !== 3 ) {
        return `The last use of ${string2[i]} is ${[i]} `;
    }
    else if (optionLetter3 || i === 2 || i === 3) {
        return `The last use of ${optionLetter3} is 3 `;

    }
    else {
        return false;
    }
});
console.log(resultFunctionString2);