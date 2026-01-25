'use strict';
import {removeDomNode} from './domNode.js'
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

    return {
        getContacts,
        addContact,
        removeContact,
        removeDomNode
    }
}
const contactService = contactsManagement();
export { contactService };
export default contactsManagement