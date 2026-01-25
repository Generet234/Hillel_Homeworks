'use strict';
import { uiContactsListHandler } from './uiContactsHandler.js'

const listHandler = uiContactsListHandler();
const contactsList = document.querySelector('[data-contacts-list]');
const contactsManagement = () => {
    const contacts = [];
    console.log('hahaha')
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
export { contactService };
export default contactsManagement