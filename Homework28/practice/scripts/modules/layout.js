'use strict';
import {contactService} from './contactManagement.js';
import { removeContactModal} from "./configConstants.js";
import {contactToDelete} from './uiContactsHandler.js'
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

export {removeElement};