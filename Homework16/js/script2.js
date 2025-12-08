'use strict';
const array = [1, 2, 3, 4, 5, 6, 7];
const fifthElement = array.indexOf(5);
const removed = array.splice(fifthElement, 1);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]
