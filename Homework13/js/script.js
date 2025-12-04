'use strict';
const arr = [1,2,3,4,5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);

const arr2 = [1,2,3,4,5];
let sumDegree2 = 0;
for(let i = 0; i < arr2.length; i++) {
    sumDegree2 = sumDegree2 + Math.pow(arr2[i],2); // Math.pow() is a function of exponentiation (возведение в степень)
}
console.log(sumDegree2);