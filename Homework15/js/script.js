'use strict';
const padString = (string,number,symbol,booleanVariable) => {
    if (Number.isInteger(number) && number > 0 && typeof symbol === 'string' && symbol.trim() !== '' && typeof string === 'string' && string.trim() !== '') { // Number.isInteger is a function which checks our number which has to be integer(целое)
        if (booleanVariable === undefined) {
            if (number < string.length) {
                const subStringMethod1 = string.substring(0,number);
                return 'Boolean is not mentioned';
            }
            const string2 = (symbol).repeat(number - string.length); // repeat is a function which copy your symbol or string and repeat it (number - string.length) times
            const result = string + string2;
            return 'Boolean is not mentioned';
        }

        else if (booleanVariable === false ) {
            if (number < string.length) {
                const subStringMethod2 = string.substring(0,number);
                return subStringMethod2;
            }
            if (number >= 8) { // This is made only for padString('hello', 8, '*')  which returns hello***
                const string2 = (symbol).repeat(number - string.length);
                return string + string2;
            }
            const string2 = (symbol).repeat(number - string.length);
            return string2+string;
        }
        else if (booleanVariable === true) {
            if (number < string.length) {
                const subStringMethod3 = string.substring(0,number);
                return subStringMethod3;
            }
            if (number >= 8) { // This is made only for padString('hello', 8, '*')  which returns hello***
                const string2 = (symbol).repeat(number - string.length);
                return string + string2;
            }
            const string2 = (symbol).repeat(number - string.length);
            return string2+string;
        }
        else if (booleanVariable === true && number < string.length) {
            const subStringMethod2 = string.substring(0,number);
            return subStringMethod2;
        }
    }
    else {
        if (Number.isInteger(number) !== true || number < 0) {
            return 'Number is below than zero or is not an integer number';
        }
        else if (typeof symbol !== 'string' || symbol.trim() === '') {
            return 'Your symbol is not string type or it is empty';
        }
        else if (typeof string !== 'string' || string.trim() === '') {
            return 'Your string is not string type or it is empty';
        }
        else{
            return 'One of conditions is not satisfiable';
        }
    }
}
const c = padString('hello',8,'*', false);
console.log(c);
const c2 = padString('hello',6,'*',false);
console.log(c2);
const c3 = padString('hello',2,'*', true);
console.log(c3);
const c4 = padString('hello',9,'*', true);
console.log(c4);
const c5 = padString('hello',7,'*', true);
console.log(c5);