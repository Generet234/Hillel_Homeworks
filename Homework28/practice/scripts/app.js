'use strict';
import contactsManagement from "./modules/contactManagement.js";
import {uiContactsListHandler} from "./modules/uiContactsHandler.js";
import {validationRegExps, errorMessages, toastAdded, addContactModal, removeContactModal, modalTrigger} from './modules/configConstants.js'
// IFFE
// Global Scope
(function(){

    // UI Handling

    const listHandler = uiContactsListHandler()

    // State management


    const contactService = contactsManagement();


    // Events


    modalTrigger.addEventListener('click', () => {
        addContactModal.show()
        removeContactModal.hide();
    })
    addContactModal._element.querySelector(`form#add-contact-form`)
        .addEventListener('submit', evt => {
            evt.preventDefault();
            let formValidated = true;
            const inputs = evt.target.querySelectorAll('input, textarea');

            const data = Array.from(inputs).reduce((acc, input) => {
                const {name, value, parentElement: wrapper} = input;

                if(validationRegExps[name].test(value)) {
                    acc[name] = value
                } else {
                    const errBlock = document.createElement('div');
                    errBlock.innerHTML = errorMessages[name];
                    errBlock.classList.add('text-danger', 'error-validation');
                    wrapper.append(errBlock)
                    formValidated = false;
                }

                return acc;
            }, {})
            if(!formValidated) return null

            data.id = String(Date.now());
            contactService.addContact(data);
            listHandler.addElement(data)

            addContactModal.hide();
            toastAdded.show()
            evt.target.reset();
            document.querySelectorAll('.error-validation').forEach(item => item.remove())
        })
})()

// Global Scope