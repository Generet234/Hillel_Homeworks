'use strict';
/**
 * Contacts Management IIFE.
 * This module handles adding, deleting, and displaying contacts in a UI list using Bootstrap modals and toasts.
 * It defines validation patterns for full name, phone, and address.
 * The UI consists of a contact list, a "no contacts" alert, and modals for adding or confirming deletion of contacts.
 * The uiContactsListHandler function provides methods for creating contact list items, delete buttons, adding elements to the DOM, and toggling the alert visibility.
 * The contactsManagement function manages the contact state in memory, with methods to get all contacts, add a contact, remove a contact by ID, and remove the corresponding DOM element.
 * The removeElement function shows a confirmation toast when deleting a contact and handles confirm and cancel actions, updating both the state and DOM accordingly.
 * Event listeners are set for opening the add contact modal, submitting the form with validation, creating contacts, showing the added toast, and clearing validation errors.
 * The contactToDelete variable tracks the ID of the contact selected for deletion.
 * All operations ensure that the contact list and alerts are properly synchronized with the current state.
 */

// IFFE
// Global Scope
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
    const toastDelete = new bootstrap.Toast(document.querySelector('#deleteContact'))
    const toastAdded = new bootstrap.Toast(document.querySelector('#contactAdded'))
    const addContactModalSelector = '#addContactModal';
    const addContactModal = new bootstrap.Modal(addContactModalSelector, {
        keyboard: false,
        backdrop: 'static'
    });
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
            element.appendChild(buttonDelete)
            contactsList.prepend(element)
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
            // Will be developed later
            const index = contacts.findIndex(c => c.id === id);
            if (index !== -1) contacts.splice(index, 1);
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
        const wrapper = document.querySelector('.toast-body-delete');

        const layout = `Hello, do you want to delete this contact id ="${data.id}".
                <div class="mt-2 pt-2 border-top">
                    <button type="button" class="btn btn-primary btn-sm-delete">Confirm</button>
                    <button type="button" class="btn btn-secondary btn-sm-remain" data-bs-dismiss="toast">Cancel</button>
                </div>`

        wrapper.innerHTML = layout;
        toastDelete.show();
        const deleteModal = document.querySelector('.btn-sm-delete');
        const remainModal = document.querySelector('.btn-sm-remain');
        console.log(deleteModal);

        deleteModal.addEventListener('click', (e) => {

            contactService.removeDomNode(contactToDelete);
            contactService.removeContact(contactToDelete);
            contactToDelete = null;
            toastDelete.hide()
        })

        remainModal.addEventListener('click', (e) => {
            contactToDelete = null;
            toastDelete.hide();
        })
    }
    // Events
    modalTrigger.addEventListener('click', () => {
        addContactModal.show()
        toastDelete.hide();
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


