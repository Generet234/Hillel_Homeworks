'use strict';
const email = prompt('Write your email in this gap.');
const password = prompt('Write password');
const isEmailVerified = !!email;
if (email.length > 1 && password.length > 1 && isEmailVerified === true) {
    const canLogin = !!email === true && !!password === true && isEmailVerified === true;
    if (canLogin) {
        console.log('Login is successfully!');
    }
    else if(canLogin === false) {
        console.log('Check your data information');
    }
}