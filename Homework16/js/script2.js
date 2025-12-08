'use strict';
const item = 0;
const removed = 0;
const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
    const fifthElement = array.indexOf(item);
    const removed = array.splice(fifthElement, 1);
    return array;
}
removeElement(array,5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]