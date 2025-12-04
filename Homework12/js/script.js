'use strict';
//Expression 1
for (let i = 20; i <= 30; i=i + 0.5) {
    console.log(i);
}
//Expression 2
const dollar = 27;
for (let i = 10; i <= 100; i=i+10) {
    console.log(i*dollar);
}
//Expression 3
let i = 1;
const N = 2000;
for (; i <= 100; i++) {
    if(N>Math.pow(i,2)) console.log(Math.pow(i,2));
}
//Expression 4
const number = 18 ;
for(let i = 1; i <= 18; i++) {
    if (number % i === 0 && number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0 && number > 1) {
        console.log('Це просте число');
        break;
    }
    else {
        console.log('У цього числа є багато дільників');
        break;
    }
}

//Expression 5
const numberExponentiation = 243;
const baseNumber = 3;
for (let i = 1; i <= 6; i++) {
    if (numberExponentiation % Math.pow(baseNumber, i) === 0) {
        console.log('Це число можна одержати шляхом зведення числа 3 у деякий ступінь');
        break;
    }
    else{
        console.log('Не можна одержати');
        break;
    }
}
