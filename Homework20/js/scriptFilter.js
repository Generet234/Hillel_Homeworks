'use strict';
/**
 * List of users.
 *
 * @type {Array<{
 *   id: number,
 *   age: number,
 *   active: boolean,
 *   email: string
 * }>}
 */
const users = [
    { id:  1, age: 17, active: true, email: "a@mail.com" },
    { id: 2, age: 22, active: true, email: "b@spam.com" },
    { id: 3, age: 30, active: false, email: "c@mail.com" },
    { id: 4, age: 35, active: true, email: "d@mail.com" },
    { id: 5, age: 40, active: true, email: "e@mail.com" },
];
const resultActiveTrue = users.filter(user => user.active === true);
console.log(resultActiveTrue);
const resultAgeBetweenEigthteenThirtyFive = users.filter(user => user.age>=18 && user.age<= 35);
console.log(resultAgeBetweenEigthteenThirtyFive);
const resultCheckingValidEmail = users.filter(user => !user.email.includes('@spam.com'));
console.log(resultCheckingValidEmail);