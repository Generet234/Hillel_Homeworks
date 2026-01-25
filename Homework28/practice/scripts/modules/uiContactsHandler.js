'use strict';
import { removeElement } from './layout.js'
import {createItemTemplate, createButtonTemplate} from "./createTemplates.js";

let contactToDelete = null;
const contactsAlert = document.querySelector('[data-contacts-alert]');
const contactsList = document.querySelector('[data-contacts-list]');
const uiContactsListHandler = () => {

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
        toggleAlert
    }
}
export {uiContactsListHandler, contactToDelete};