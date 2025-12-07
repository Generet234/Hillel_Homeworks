'use strict';
const length = 16;
let randomString = '';
function generateKey(length, characters) {
    for(let i = 0; i < length; i++) {
        let randomIndex = characters[Math.floor(Math.random()*characters.length)]; //Math.floor is rounding number to the lower or bigger number 34.5 = 35, 34.3 = 34
        randomString += randomIndex;
    }
    return randomString;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i