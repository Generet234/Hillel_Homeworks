'use strict';
const string = '';
const padString = (string,number,symbol,booleanVariable) => {
    if (Number.isInteger(number) && typeof number === 'number' && number > 0 && typeof symbol === 'string' && symbol.trim() !== '') { // Number.isInteger is a function which checks our number which has to be integer(целое)
        if (booleanVariable === undefined) {
            if (number < string.length) {
                const subStrintMethod = string.substring(0,number);
                console.log('Boolean is undefined');
                return subStrintMethod;
            }
            const string2 = (symbol).repeat(number - string.length); // repeat is a function which copy your symbol or string and repeat it (number - string.length) times
            const result = string + string2;
            console.log('Boolean is undefined');
            return result;
        }

        else if (booleanVariable === false || booleanVariable === true) {
            const string2 = (symbol).repeat(number - string.length);
            return string2+string;
        }
    }
    else {
        console.log('You have a such problem with your variables');
    }
}
const c = padString('hello',8,'*', false);
console.log(c);
const c2 = padString('hello',6,'*',false);
console.log(c2);
const c3 = padString('hello',2,'', true);
console.log(c3);
const c4 = padString('hello',2,'', true);
console.log(c4);
const c5 = padString('hello',2,'', true);
console.log(c5);