'use strict';
// Expression 1
const expression = +prompt('What is the equal of this expression "2-2" ?');
const a1 = expression === 0? 'True' : 'False';
console.log(a1);
// Expression 2
const age = +prompt('Write your age?');
const a2 = age > 0? 'True' : 'False';
console.log(a2);
//Expression 3
const number = 2;
const a3 = number < 0? 'True' : 'False';
console.log(a3);
// Expression 4
const number2 = -3;
const a4 = number2>= 0? 'True' : 'False';
console.log(a4);
// Expression 5
const number3 = 4;
const a5 = number3<= 0? 'True' : 'False';
console.log(a5);
// Expression 6
const number4 = 0;
const a6 = number4!==0? 'True' : 'False';
console.log(a6);
// Expression 7
const text = '-test';
const a7 = text === 'test' ? 'True' : 'False';
console.log(a7);
// Expression 8
const one = '-1';
const a8 = one === '1' ? 'True' : 'False';
console.log(a8);
// Expression 9
const a9 = -2;
if ((a9 >0 && a9<5)){
    console.log('True');
}
else {
    console.log('False');
}
console.log(a9);
// Expression 10
const a10 = -10 ||-2;
if (a10 === 0 || a10 === 2){
    console.log(a10+7);
}
else{
    console.log(a10/10);
}
console.log(a10);

// Expression 11
const a11 = 0;
const b11 = -4;
if(a11 <= 1 && b11 >=3){
    console.log(a11+b11);
}
else {
    console.log(a11-b11);
}
// Expression 12
const a12 = -3;
const b12 = -7;
if ((a12 > 2 && a12 < 11) || (b12 >=6 && b12 <14)){
    console.log('Right');
}
else {
    console.log('Wrong');
}
// Expression 13
const num = -1 || -2 || -3 || -4;
switch (num) {
    case 1:
        const result1 = 'winter';
        console.log(result1);
        break;
    case 2:
        const result2 = 'spring';
        break;
    case 3:
        const result3 = 'summer';
        break;
    case 4:
        const result4 = 'autumn';
        break;

        default:
            console.log('Wrong option');
}