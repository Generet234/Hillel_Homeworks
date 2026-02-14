'use strict';

const profileModel = {
    _lastName: '',
    _email: '',
    createdAt: new Date(),
    get firstName() {
        return this._firstName;
    },
    set firstName(value){
        console.log(value);
        if (value.length<2) {
            this._firstNameError = true;
            throw Error('First name needs to be more than 1 symbol!');
        }
        this._firstNameError = false;
        this._firstName = value;
    },
    get lastName() {
        return this._lastName;
    },
    set lastName(value){
        if(value.length<2){
            this._lastNameError = true;
            throw Error('Last name needs to be more than 1 symbol!');
        }
        else {
            this._lastNameError = false;
            this._lastName = value;
        }
    },
    get email() {
        return this._email;
    },
    set email(value){
        if(!value.includes('@') || !value.includes('.')) {
            this._emailError = true;
            throw Error('Email address needs to have @ and . !');
        }
        else {
            this._emailError = false;
            this._email = value;
        }
    },
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    },
    get layout(){
        return `<div class="card" style="width: 18rem;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr96sJZqzVzpS1sio1ZLnGBuP9AfBLOk07Dg&s" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">Profile card</h5>
    <p class="card-text">Your full name is ${this._firstName} ${this._lastName}</p>
    <p class="card-text">Your email is ${this._email}</p>
    <p class="card-text">This request created at ${this.createdAt}</p>
    <a href="https://www.google.com" class="btn btn-primary">Go to the google page</a>
  </div>
</div>`
    },
    cardAppearanceAndErrorMistakes(value) {
        const card = document.querySelector('.card.d-none');
        if(value[0].length>=2 && value[1].length>=2 && value[2].includes('@') && value[2].includes('.')){
            card.innerHTML = profileModel.layout
            card.classList.toggle('d-none');
        }
    },
    validation(){
        const firstNameError = document.body.querySelector('.error-message-firstName');
        const lastNameError = document.body.querySelector('.error-message-lastName');
        const emailError = document.body.querySelector('.error-message-email');
        firstNameError.hidden = !this._firstNameError;
        lastNameError.hidden = !this._lastNameError;
        emailError.hidden = !this._emailError;

        if (!firstNameError.hidden) firstNameError.classList.add('invalid');
        else firstNameError.classList.remove('invalid');

        if (!lastNameError.hidden) lastNameError.classList.add('invalid');
        else lastNameError.classList.remove('invalid');

        if (!emailError.hidden) emailError.classList.add('invalid');
        else emailError.classList.remove('invalid');
    }
}

Object.defineProperties(profileModel, {
    _firstName: {
        value:' ',
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
const saveButton = document.body.querySelector('.save')
freezeButton.addEventListener('click', e => {
    e.preventDefault();
    const frozen = document.querySelector('.error-message-freezeModel');
    if (Object.isFrozen(profileModel)){
        frozen.hidden = false;
        return;
    }
    document.body.addEventListener('input', e => {
        throw new Error('Model is frozen')
    })
})
saveButton.addEventListener('click', e => {
    e.preventDefault();
    const data = Array.from(inputs).reduce((acc, input) => {
        const {value} = input;
        acc.push(value);
        return acc;
    },[])
    try {
        profileModel.firstName = data[0];
        profileModel.lastName = data[1];
        profileModel.email = data[2];
        profileModel.cardAppearanceAndErrorMistakes(data);
    }
    catch (e) {
        console.error(e);
        profileModel.validation();
    }
});
    const wrapper = document.body.querySelector('.input-wrapper');
    wrapper.addEventListener('input', e => {
            if (e.target.tagName === 'INPUT') {
                const error = e.target.nextElementSibling;
                if(error && error.classList.contains('invalid') && (profileModel._lastNameError || profileModel._emailError || profileModel._firstNameError)) {
                    console.log(error)
                    error.hidden = true;
                    error.classList.remove('invalid');
                }
            }
        else return;
    })