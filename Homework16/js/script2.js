'use strict';
const index = 0;
const removed = 0;
const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, index) {
    const fifthElement = array.indexOf(index);
    const removed = array.splice(fifthElement, 1);
    return removed;
}
removeElement(array,5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]
