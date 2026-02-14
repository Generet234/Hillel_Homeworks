'use strict';

/**
 * User profile data model that stores private fields (_firstName, _lastName, _email)
 * and the profile creation date (createdAt). It provides public getters and setters
 * for firstName, lastName, and email with basic validation (minimum length for first
 * and last names, and email containing "@" and "."). The model automatically shows
 * or hides error messages in the DOM, computes the full name via a read-only fullName
 * getter, attaches an input listener to clear errors when the user types, and supports
 * freezing the model with Object.freeze to prevent further modifications.
 *
 * @typedef {Object} ProfileModel
 * @property {string} _firstName - Private first name
 * @property {string} _lastName - Private last name
 * @property {string} _email - Private email
 * @property {Date} createdAt - Date when the profile was created
 * @property {string} firstName - Public accessor (getter/setter) for first name with validation
 * @property {string} lastName - Public accessor (getter/setter) for last name with validation
 * @property {string} email - Public accessor (getter/setter) for email with validation
 * @property {string} fullName - Read-only full name combining first and last name
 * @property {function(): void} validation - Adds an input listener to clear visible error messages when the user types
 */

const profileModel = {
    _lastName: '',
    _email: '',
    createdAt: new Date(),
    get firstName() {
        return this._firstName;
    },
    set firstName(value){
        console.log(value);
        const error = document.querySelector('.error-message-firstName')
        if (value[0].length>=2) {
            this._firstName = value[0];
            this._lastName = value[1];
            this._email = value[2];
            error.hidden = true;
            error.classList.remove('invalid')
            const card = document.querySelector('.card.d-none');
            if(value[0].length>=2 && value[1].length>=2 && value[2].includes('@') && value[2].includes('.')){
                profileModel.layout
                card.innerHTML = profileModel.layout
                card.classList.toggle('d-none');
            }
        }
        else {
            error.hidden = false;
            this.validation()
            error.classList.add('invalid');
        }
    },
    get lastName() {
        return this._lastName;
    },
    set lastName(value){
        const error = document.querySelector('.error-message-lastName')
        if(value[1].length>=2){
            this._lastName = value[1];
            error.hidden = true;
            error.classList.remove('invalid');
        }
        else {
            error.classList.add('invalid');
            error.hidden = false;
            this.validation();
        }
    },
    get email() {
        return this._email;
    },
    set email(value){
        const error = document.querySelector('.error-message-email')
        if(value[2].includes('@') && value[2].includes('.')) {
            this._email = value[2];
            error.hidden = true;
            error.classList.remove('invalid')
        }
        else {
            error.hidden = false;
            this.validation();
            error.classList.add('invalid');
        }
    },
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    },
    validation(){
        document.body.addEventListener('input', e => {
            if(e.target.tagName === 'INPUT'){
                const error = e.target.nextElementSibling;
                error.hidden = true;
            }
            else return;
        })
    }
}

Object.defineProperties(profileModel, {
    _firstName: {
        writable: true,
        enumerable: false,
        configurable: false
    },
    _lastName: {
        writable: true,
        enumerable: false,
        configurable: false
    },
    fullName: {
        writable:false
    }
})

const inputs = document.body.querySelectorAll('input');
const freezeButton = document.body.querySelector('.freezeModel');
freezeButton.addEventListener('click', e => {
    e.preventDefault();
    Object.freeze(profileModel)
    const frozen = document.querySelector('.error-message-freezeModel');
    frozen.hidden = false;
    document.body.addEventListener('input', e => {
        throw new Error('Model is frozen')
    })
})

const saveButton = document.body.querySelector('.save')
saveButton.addEventListener('click', e => {
    e.preventDefault();
    const data = Array.from(inputs).reduce((acc, input) => {
        const {value} = input;
        acc.push(value);
        return acc;
    },[])
    profileModel.firstName = data;
    profileModel.lastName = data;
    profileModel.email = data;
});