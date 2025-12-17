'use strict';
const array = [4,7,622,5,21,8,657,118,953];
console.log(array[0]);
const functionReverse = (arr) => {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    while(endIndex >= (arr.length -1)/2) {

        if (endIndex === (arr.length -1)/2) {
            arr[startIndex] = arr[endIndex];
            startIndex +=1;
            endIndex -=1;
        }
        if(startIndex < endIndex){
            const temp = arr[startIndex];
            arr[startIndex] = arr[endIndex];
            arr[endIndex] = temp;
            startIndex +=1;
            endIndex -=1;
        }
        }

    return arr;

}
const resultFunction1 = functionReverse(array);
console.log(resultFunction1);
console.log('------');
