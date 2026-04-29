class View {
    myModalCreate = new bootstrap.Modal(document.getElementById('myModalCreate'), {keyboard: false, backdrop: 'static'});
    myModalDelete = new bootstrap.Modal(document.getElementById('myModalDelete'), {keyboard: false, backdrop: 'static'});
    myModalUpdate = new bootstrap.Modal(document.getElementById('myModalUpdate'), {keyboard: false, backdrop: 'static'});
    buttonAddUser = document.body.querySelector('[data-user-add]')
    tableBody = document.body.querySelector('.container')
    modalContainer = document.body.querySelector('#taskFormsCreate')
    modalTemplateUpdate = document.querySelector('#taskFormsUpdate')
    modalTemplateDelete = document.querySelector('#taskFormsDelete')
    table = document.getElementById("user-table-body");

    renderTable(users) {
        if(!users) return;

        const tableInfo =  users.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.company?.name}</td>
            <td>
                <button type="button" class="btn btn-info" data-edit=${user.id}>Edit</button>
                <button type="button" class="btn btn-danger" data-delete=${user.id}>Delete</button>
            </td>
        </tr>`
        ).join('');
        this.table.innerHTML = tableInfo
    }
    tableToggleDNone(){
        const classes = this.table.classList
        const result = classes.toggle('d-none')
        console.log(classes)
        return result
    }
    tableTurnOff(){
        const classes = this.tableBody.classList
        const result = classes.toggle('d-none')
        console.log(classes)
        return result
    }
    toggleErrorText(key, isHidden){
        const element=document.querySelector(`[data-text-error-${key}]`)
        if(element){
            element.hidden = isHidden
        }
        return element
    }
    openCreateModal() {
        const modalTemplateCreate = document.querySelector('#taskFormsCreate')
        modalTemplateCreate.innerHTML = `
                <div class="modal-header">
                    <h5 class="modal-title">Create new user</h5>
                </div>
                <div class="modal-body">
                    <form id="createUserForm">
                    <div class="mb-3">
                            <label for="name" class="col-form-label d-none">Id</label>
                            <input type="text" class="form-control d-none" id="id" value=${Date.now()}>
                        </div>
                      <div class="mb-3">
                        <label for="name" class="col-form-label">Name</label>
                        <input type="text" class="form-control" id="name">
                        <div id="nameError" data-text-error-name class="text-danger mt-1" hidden>Name is required</div>
                      </div>
                      <div class="mb-3">
                        <label for="email" class="col-form-label">Email</label>
                        <input type="email" class="form-control" id="email">
                        <div id="nameErrorEmail" data-text-error-email class="text-danger mt-1" hidden>Email is required or email does not have an @</div>
                      </div>
                      <div class="mb-3">
                        <label for="phone" class="col-form-label">Phone</label>
                        <input type="tel" class="form-control" id="phone">
                      </div>
                      <div class="mb-3">
                        <label for="companyName" class="col-form-label">Company name</label>
                        <input type="text" class="form-control" id="companyName">
                      </div>
                    </form>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" data-user-save form="createUserForm">Save changes</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
        `
        this.myModalCreate.show()
    }

    openUpdateModal(user) {
        const modalTemplateUpdate = document.querySelector('#taskFormsUpdate')
        modalTemplateUpdate.innerHTML = `
                <div class="modal-header">
                    <h5 class="modal-title">Update user #${user.id}</h5>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="name" class="col-form-label d-none">Name</label>
                            <input type="hidden" class="form-control d-none" id="id" value='${user.id}'>
                          </div>
                      <div class="mb-3">
                        <label for="name" class="col-form-label">Name</label>
                        <input type="text" class="form-control" id="name" value='${user.name}'>
                      </div>
                      <div class="mb-3">
                        <label for="email" class="col-form-label">Email</label>
                        <input type="email" class="form-control" id="email" value='${user.email}'>
                      </div>
                      <div class="mb-3">
                        <label for="phone" class="col-form-label">Phone</label>
                        <input type="tel" class="form-control" id="phone" value='${user.phone}'>
                      </div>
                      <div class="mb-3">
                        <label for="companyName" class="col-form-label">Company name</label>
                        <input type="text" class="form-control" id="companyName" value='${user.company?.name}'>
                      </div>
                    </form>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" data-save-update>Save changes</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
        `
        this.myModalUpdate.show()
    }

    openDeleteModal(id) {
        const modalTemplateDelete = document.querySelector('#taskFormsDelete')
        modalTemplateDelete.innerHTML = `
            <form>
              <div class="modal-header">
                <h5 class="modal-title">Delete user #${id}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                      <label for="name" class="col-form-label d-none">Name</label>
                      <input type="hidden" class="form-control d-none" id="id" value='${id}'>
                </div>
                <p>Are you sure you want to delete user ${id}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" data-deleteModal=${id}>Save changes</button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>
            </form>`
        this.myModalDelete.show()
    }

    getFormData(formElement){
        console.log(formElement)
        if(!formElement) return;

        const name = formElement.querySelector('#name').value
        const email = formElement.querySelector('#email').value
        const phone = formElement.querySelector('#phone').value
        const id = formElement.querySelector('#id').value ? formElement.querySelector('#id').value : Date.now();
        const companyName = formElement.querySelector('#companyName').value


        return {name, email, phone, companyName,id}
    }

    setLoading(isLoading){
            const loaderContainer = document.querySelector('.loaderContainer')
            if(!loaderContainer) return;
            if(isLoading){
                loaderContainer.innerHTML = `
                <p class="placeholder-glow">
                    <span class="placeholder col-12"></span>
                </p>
                <p class="placeholder-glow">
                  <span class="placeholder col-12"></span>
                </p>
                <p class="placeholder-glow">
                  <span class="placeholder col-12"></span>
                </p>
                <p class="placeholder-glow">
                  <span class="placeholder col-12"></span>
                </p>
                <p class="placeholder-glow">
                  <span class="placeholder col-12"></span>
                </p>
                <p class="placeholder-glow">
                  <span class="placeholder col-12"></span>
                </p>
                `
            }
            else {
                loaderContainer.innerHTML = ``;
            }
    }
    showError(failedFields){
        const container = document.querySelector('.error-message')
        if(!container) return;
        if(failedFields.length > 0){
            const message = failedFields[0].message;
            const toastHTML = `
            <div class="toast align-items-center text-bg-warning border-0" role="alert" aria-live="assertive" aria-atomic="true">
              <div class="d-flex">
                <div class="toast-body">
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
            </div>`
            container.innerHTML = toastHTML
            const toastElement = container.querySelector('.toast')
            toastElement.querySelector('.toast-body').textContent = `Error is ${message}`
            const bsToast = new bootstrap.Toast(toastElement,{delay:5000})
            bsToast.show();
        }
        else{
            container.innerHTML = ``;
        }
        this.tableTurnOff()
    }
    toggleInputErrorClass(key, hasError){
        const input = document.querySelector(`[name="${key}"]`);
        if(input){
            input.classList.toggle('is-invalid', hasError);
        }
    }
}
export default View;