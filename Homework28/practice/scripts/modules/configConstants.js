'use strict';

const validationRegExps = {
    'fullName': /^(?=.{2,80}$)[\p{L}]+(?:[ '\-][\p{L}]+){0,3}$/u,
    'phone': /^\+[1-9]\d{7,14}$/,
    'address': /^(?=.{5,120}$)[\p{L}\d][\p{L}\d\s.,'’\-\/#]+$/u
}

const errorMessages = {
    'fullName': 'Full Name Required',
    'phone': 'Phone Number Required',
    'address': 'Address Required',
}
const modalTrigger = document.querySelector('[data-add-contact-modal-btn]');
const toastAdded = new bootstrap.Toast(document.querySelector('#contactAdded'))
const addContactModalSelector = '#addContactModal';
const addContactModal = new bootstrap.Modal(addContactModalSelector, {
    keyboard: false,
    backdrop: 'static'
});
const removeContactModal = new bootstrap.Modal('#deleteContactModal', {
    keyboard: true,
    backdrop: 'static'
})
export let contactToDelete = null;
export {validationRegExps, errorMessages, toastAdded, addContactModal, removeContactModal, modalTrigger};