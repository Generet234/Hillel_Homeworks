'use strict';
const age = prompt('What is your age?');
const number = Number(age);
if(age === null || age.trim() === '' || Number.isNaN(number)) { // isNan is checking for NaN, input.trim() is looking for gaps
    alert('Incorrect age');
}
else{
        alert(`In 5 years you will be ${number + 5} years old`);
}
const price1 = "120.50$";
const price2 = "UAH 999";
const height = "180cm";
const broken = "abc123";
console.log(`${price1} -> parseInt: ${parseInt(price1)} parseFloat: ${parseFloat(price1)}`);
console.log(`${price2} -> parseInt: ${parseInt(price2)} parseFloat: ${parseFloat(price2)}`);
console.log(`${height} -> parseInt: ${parseInt(height)} parseFloat: ${parseFloat(height)}`);
console.log(`${broken} -> parseInt: ${parseInt(broken)} parseFloat: ${parseFloat(broken)}`);
