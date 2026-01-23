'use strict';

// IFFE
// Global Scope
/**
 * @fileoverview This script manages a contact list using Bootstrap Modals and Toasts.
 * It provides form validation for full name, phone, and address fields, dynamically adds
 * and removes contacts from the list, updates the UI to show or hide alerts based on the
 * list state, and shows toast notifications when a contact is added. The script also
 * handles the delete contact confirmation modal, storing the ID of the contact to be
 * deleted and using event delegation to confirm or cancel deletion. All functions and
 * variables are encapsulated in an IIFE to prevent polluting the global scope, including
 * methods for creating list items and buttons, toggling UI alerts, managing the internal
 * state of contacts, and attaching event listeners for modal triggers, form submissions,
 * and modal footer buttons.
 */

(function(){
    // Just for example
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

    // General Variables
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
    let contactToDelete = null;
    const modalTrigger = document.querySelector('[data-add-contact-modal-btn]');

    // UI Handling
    const contactsAlert = document.querySelector('[data-contacts-alert]');
    const contactsList = document.querySelector('[data-contacts-list]');

    const uiContactsListHandler = () => {

        const createItemTemplate = ({id,fullName, phone, address}) => {
            const li = document.createElement('li');
            li.classList.add('list-group-item')
            li.dataset.id = id;
            li.innerHTML = `${fullName} | ${phone} | ${address}`;
            return li;
        }

        const createButtonTemplate = () => {
            const button = document.createElement('button');
            button.classList.add('list-group-item');
            button.type = 'button';
            button.textContent = 'Delete';
            return button;
        }

        const addElement = (data) => {
            const element = createItemTemplate(data)
            const buttonDelete = createButtonTemplate();
            element.append(buttonDelete)
            contactsList.prepend(element)
            console.log(contactsList)
            buttonDelete.addEventListener('click', (e) => {
                contactToDelete = data.id;
                removeElement(data);
            })
            toggleAlert();
        }


        const toggleAlert = () => {
            if (contactsList.children.length === 0) {
                contactsList.classList.add('d-none');
                contactsAlert.classList.remove('d-none');
            }
            else{
                contactsList.classList.remove('d-none');
                contactsAlert.classList.add('d-none');
            }
        }

        return {
            addElement,
            createItemTemplate,
            createButtonTemplate,
            toggleAlert
        }
    }

    const listHandler = uiContactsListHandler()

    // State management
    const contactsManagement = () => {
        const contacts = [];

        const getContacts = () => {
            return structuredClone(contacts);
        }

        const addContact = (data) => {
            contacts.push(data);
            console.log(data)
        }

        const removeContact = (id) => {

            const index = contacts.findIndex(c => c.id === id);
            console.log(contacts[index]);
            if (index !== -1) {
                contacts.splice(index, 1);
            }
        }
        const removeDomNode =(id) => {
            const element = contactsList.querySelector(`[data-id="${id}"]`);
            if (element) element.remove();
            listHandler.toggleAlert();
        }

        return {
            getContacts,
            addContact,
            removeContact,
            removeDomNode,
        }
    }

    const contactService = contactsManagement();

    const removeElement = (data) => {
        const wrapper = document.querySelector('.modal-dialog.modal-dialog-centered');

        const layout = `
                <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            Hello, do you want to delete this contact with ${contactToDelete} id
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary confirm" data-bs-toggle="modal">Confirm</button>
            <button class="btn btn-primary close" data-bs-toggle="modal">Cancel</button>
        </div>
    </div>`

        wrapper.innerHTML = layout;
        removeContactModal.show();
        removeContactModal._element.querySelector('.modal-footer')
            .addEventListener('click', (e) => {
                if (e.target.closest('.btn.btn-primary.confirm')){
                    contactService.removeDomNode(contactToDelete);
                    contactService.removeContact(contactToDelete);
                    contactToDelete = null;
                    removeContactModal.hide()
                }
                if(e.target.closest('.btn.btn-primary.close')){
                    contactToDelete = null;
                    removeContactModal.hide();
                }
            })
    }
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


