'use strict';
const string = '';
const padString = (string,number,symbol,booleanVariable) => {
    if (booleanVariable === undefined) {
        if (number < string.length) {
            const subStrintMethod = string.substring(0,number);
            return {subStrintMethod, error :'Boolean underfined'};
        }
        const string2 = (symbol).repeat(number - string.length); // repeat is a function which copy your symbol or string and repeat it (number - string.length) times
        const result = string + string2;
        return {result, error :'Boolean underfined'};
    }

    else if (booleanVariable === false) {
        const string2 = (symbol).repeat(number - string.length);
        return string2+string;
    }
}
const c = padString('hello',8,'*');
console.log(c);
const c2 = padString('hello',6,'*',false);
console.log(c2);
const c3 = padString('hello',2, );
console.log(c3);