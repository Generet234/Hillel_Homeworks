'use strict';
import { removeElement } from './layout.js'
let contactToDelete = null;
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
export {uiContactsListHandler, contactToDelete};