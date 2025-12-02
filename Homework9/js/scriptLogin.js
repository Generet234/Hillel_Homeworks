'use strict';
const email = prompt('Write your email in this gap.');
const password = prompt('Write password');
const isEmailVerified = !!email;
const canLogin = !!email === true && !!password === true && isEmailVerified === true;
if (email.length > 1 && password.length > 1 && isEmailVerified === true) {
    if (canLogin === true) {
        console.log('Login is successfully!');
        console.log(canLogin);
    }
}
else {
        console.log('Check your data information');
        console.log(canLogin);
}