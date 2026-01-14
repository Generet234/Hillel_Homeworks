'use strict';
/**
 * This script handles live validation of a form, saving input values to localStorage
 * before the page unloads, restoring saved values on page load, displaying submitted
 * form data in a dynamically created list, and clearing the form and displayed data
 * on a button click. It validates the email, password, and age fields on input events
 * and shows errors when invalid. On page load, it restores any saved input values and
 * sets up a beforeunload listener to save current values. On form submission, it prevents
 * default behavior, converts the form data into an object, and displays it in a list
 * if the password matches the confirmation. The clear button resets the form, removes
 * the displayed list, and clears the console. Functions like `savedItem` create a UL element
 * containing the submitted data, and `showError` displays error messages in the form.
 */

const form = document.querySelector('[data-form]');
const insert = document.querySelector('[data-form-values]');
console.log(form);
const savedItem = (data) => {
    const ul = document.createElement('ul');
    ul.classList.add('list-group');
    ul.innerHTML = `
    <li class="list-group-item "><b>Email: </b> ${data.email}</li>
    <li class="list-group-item "><b>Password: </b> ${data.password}</li>
    <li class="list-group-item "><b>Submit Password: </b> ${data.submitPass}</li>
    <li class="list-group-item "><b>Age: </b> ${data.age}</li>
    <li class="list-group-item "><b>City: </b> ${data.city}</li>
`;
    return ul;
}

const hiddenTextWeak = document.querySelector('[data-weak]');
const hiddenTextMedium = document.querySelector('[data-medium]');
const hiddenTextStrong = document.querySelector('[data-strong]');
console.log(hiddenTextWeak, hiddenTextMedium, hiddenTextStrong);
const error = document.getElementsByClassName('error');

form.addEventListener('input', (e) => {
    const { name, value } = e.target;

    error.hidden = true;
    error.textContent = '';

    if (name === 'email' && !value.includes('@')) {
        showError('Email must contain @');
    }

    if (name === 'password' && value.length <= 8) {
        showError('Password must be longer than 8 characters');
    }

    if (name === 'age' && (value < 16 || value > 120)) {
        showError('Your age is lower than 16 or higher than 120');
    }
});

function showError(message) {
    error.textContent = message;
    error.hidden = false;
}

const passwordInput = document.querySelector('input[name="password"]');

passwordInput.addEventListener('input', (e) => {
    const value = e.target.value;
    hiddenTextWeak.hidden = true;
    hiddenTextMedium.hidden = true;
    hiddenTextStrong.hidden = true;

        if (value.length >= 8 && value.length <= 12) {
            hiddenTextWeak.hidden = false;
        }
        else if (value.length > 12 && value.length <= 16) {
            hiddenTextMedium.hidden = false;
        }
        else if (value.length > 16 && value.length <= 22) {
            hiddenTextStrong.hidden = false;
        }
})

document.addEventListener('DOMContentLoaded', (e) => {
    const inputEmail = document.querySelector('input[name="email"]');
    const inputPassword = document.querySelector('input[name="password"]');
    const inputSubmitPassword = document.querySelector('input[name="submitPass"]');
    const inputAge = document.querySelector('input[name="age"]');
    const inputCity = document.querySelector('input[name="city"]');
    const inputCheckbox = document.querySelector('input[name="checkbox"]');

    window.addEventListener('beforeunload', () => {
        localStorage.setItem('email', inputEmail.value );
        localStorage.setItem('age', inputAge.value );
        localStorage.setItem('password', inputPassword.value );
        localStorage.setItem('submitPass', inputSubmitPassword.value );
        localStorage.setItem('city', inputCity.value );
        localStorage.setItem('checkbox', inputCheckbox.value );
    });

    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const savedAge = localStorage.getItem('age');
    const savedCity = localStorage.getItem('city');
    const savedCheckbox = localStorage.getItem('checkbox');
    const savedSubmitPassword = localStorage.getItem('submitPass');

    if (savedEmail) {
        inputEmail.value = savedEmail;
    }
    if (savedPassword) {
        inputPassword.value = savedPassword;
    }
    if (savedAge) {
        inputAge.value = savedAge;
    }
    if (savedCity) {
        inputCity.value = savedCity;
    }
    if (savedCheckbox) {
        inputCheckbox.value = savedCheckbox;

    }
    if (savedSubmitPassword) {
        inputSubmitPassword.value = savedSubmitPassword;
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
            if(data['submitPass'] === data['password']){
                console.log(data);
                insert.prepend(savedItem(data));
            }

    })

const clear = document.querySelector('.mt-3.btn.btn-clear');

clear.addEventListener('click', (e) => {
    e.preventDefault();
    insert.remove();
    form.reset();
    console.clear();
})


