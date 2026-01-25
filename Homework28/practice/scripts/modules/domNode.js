'use strict'
import { uiContactsListHandler } from './uiContactsHandler.js'
const listHandler = uiContactsListHandler();

const contactsList = document.querySelector('[data-contacts-list]');

const removeDomNode =(id) => {
    const element = contactsList.querySelector(`[data-id="${id}"]`);
    if (element) element.remove();
    listHandler.toggleAlert();
}
export { removeDomNode };