'use strict';
const array = [1,2,3,4,5,6,7];
const removeElement = function(array) {
    for(let quantity of array) {
        if (quantity === 4){
            array = [1,2,3,4,6,7];
            console.log(array);
        }
    }
}
removeElement(array,5)
// Результат: [1, 2, 3, 4, 6, 7]


