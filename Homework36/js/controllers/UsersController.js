class Controllers {
    #model = null;
    #view = null;
    constructor(model,view){
        this.#model = model;
        this.#view = view;
    }
    async init(){
            this.#view.setLoading(true)
            await this.#handleTableUserData();
            this.#view.setLoading(false)
            this.#view.tableBody.addEventListener('click', (event) => {
                this.#handleDeleteUserButton(event)
                this.#handleEditUserClick(event)
            })
            this.#view.buttonAddUser.addEventListener('click', () => this.#handleAddUserClick())
            this.#view.modalContainer.addEventListener('click', (e) => this.#handleSaveUserData(e))
            this.#view.modalTemplateUpdate.addEventListener('click', (event) => this.#handleEditUserSubmit(event))

            this.#view.modalTemplateDelete.addEventListener('click', (event) => this.#handleDeleteUser(event))
    }
    async #handleDeleteUser(event){
        const deleteButton = event.target.closest('[data-deleteModal]')
        const idDeleteButton = deleteButton.dataset.deletemodal;
        if(!deleteButton) return;
        this.#view.setLoading(true)
        this.#view.tableToggleDNone()
        const deletedUser = await this.#model.getFetchDelete(idDeleteButton)
        if(!deletedUser) return;
        this.#model.delete(deletedUser.id)
        this.#view.tableToggleDNone()
        this.#view.setLoading(false)

    }
    async #handleTableUserData() {
        const users = await this.#model.getAllFetchUsers()
        this.#view.renderTable(users);
    }
    #handleDeleteUserButton(event){
        const deleteButton = event.target.closest('[data-delete]');

        if(!deleteButton) return;
        const idDeleteButton = deleteButton.dataset.delete;
        this.#view.openDeleteModal(idDeleteButton)
    }
    #handleAddUserClick(){
        this.#view.openCreateModal()
    }
    async #handleSaveUserData(e){
        e.preventDefault();
        const saveButton = e.target.closest('[data-user-save]')
        if(saveButton){
            const currentForm = saveButton.closest('.modal').querySelector('form')
            const userInfo = this.#view.getFormData(currentForm)
            const validation = this.#model.validation(userInfo)
            const isValid = this.#errorTextValidationHandler(validation)

            if(!isValid) return;

            try {
                this.#view.setLoading(true)
                this.#view.tableToggleDNone()
                const savedUser = await this.#model.getAllFetchSubmit(userInfo)
                if(savedUser) this.#view.tableToggleDNone()
                const createdInfo = Object.entries(userInfo)
                this.#model.create(createdInfo)
                this.#view.setLoading(false)
                const getUsersInfo = await this.#model.getAllFetchUsers()
                this.#view.renderTable(getUsersInfo)
            }
            catch(err){
                this.#view.showError(err)
            }
        }
        else{
            return;
        }
    }
    async #handleEditUserClick(event){
        event.preventDefault();
        const editButton = event.target.closest('[data-edit]');

        if(!editButton) return;

        const idEditButton = editButton.dataset.edit;
        const getInfo = await this.#model.getFetchUsers(idEditButton)
        this.#view.openUpdateModal(getInfo)


    }
    async #handleEditUserSubmit(event){
        event.preventDefault();
        const saveButton = event.target.closest('[data-save-update]');
        if(!saveButton) return;
        const currentForm = saveButton.closest('.modal').querySelector('form')
        const userInfo = this.#view.getFormData(currentForm)
        Object.entries(userInfo).forEach(([key,value])=> {
            const validation = this.#model.validation(key,value)
            if(validation.errors){
                this.#view.showError(validation.errors)
            }
        })
        try{
            this.#view.setLoading(true)
            this.#view.tableToggleDNone()
            const updatedUser = await this.#model.getFetchUpdate(userInfo.id,userInfo)
            if(updatedUser) this.#view.tableToggleDNone()
            this.#model.update(userInfo.id,updatedUser)
            const getUsersInfo = await this.#model.getAllFetchUsers()
            this.#view.renderTable(getUsersInfo)
            this.#view.setLoading(false)
        }
        catch (err) {
            this.#view.showError(err)
        }
    }
    #errorTextValidationHandler = (validation) => {
        this.#view.toggleErrorText('name',true)
        this.#view.toggleErrorText('email',true)

        let isValid = true;

        if(!validation.errors || validation.errors.length === 0){
            return true;
        }
        console.log(validation.errors)
        if(validation.errors.length > 0 && validation.errors){
            validation.errors.forEach((error) => {
                const errorMessage = validation[error.key];
                const isFieldInvalid = Boolean(errorMessage)
                this.#view.toggleErrorText(error.key, !isFieldInvalid)
                this.#view.toggleInputErrorClass(error.key, isFieldInvalid)
                if(isFieldInvalid) isValid = false;
            })
            this.#view.showError(validation.errors)
            return isValid;
        }
        }

}
export default Controllers;