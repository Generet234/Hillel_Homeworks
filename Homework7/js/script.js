'use strict';
const input = prompt('What is your age?');
const numbers = Number(input);
console.log(numbers);
if(input === null || input.trim() === '' || Number.isNaN(numbers)) { // isNan is checking for NaN, input.trim() is looking for gaps
    alert('Incorrect age');
}
else{
        const numberFiveYears = numbers + 5;
        alert(`In 5 years you will be ${numberFiveYears} years old`);
}
const price1 = "120.50$";
const price2 = "UAH 999";
const height = "180cm";
const broken = "abc123";
console.log(`${price1} -> parseInt: ${parseInt(price1)} parseFloat: ${parseFloat(price1)}`);
console.log(`${price2} -> parseInt: ${parseInt(price2)} parseFloat: ${parseFloat(price2)}`);
console.log(`${height} -> parseInt: ${parseInt(height)} parseFloat: ${parseFloat(height)}`);
console.log(`${broken} -> parseInt: ${parseInt(broken)} parseFloat: ${parseFloat(broken)}`);
