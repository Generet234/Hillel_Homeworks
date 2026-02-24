class View {
    form = document.querySelector('#formTask')
    clearButton = document.querySelector('[data-clear-button]')
    tasksContainer = document.querySelector('#notesList');
    modalButton = document.querySelector('.btn-primary-modal');
    forms = document.querySelector('#taskForms');
    myModal = new bootstrap.Modal(document.querySelector('#myModal'), {keyboard: false, backdrop: 'static',});

    //creating template for each task
    createTaskTemplate(task) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('col-6')
        wrapper.setAttribute('data-id', task.id);
        wrapper.innerHTML = `
                                <div class="taskWrapper">
                                <div class="taskHeading d-flex justify-content-between">
                                <span class="badge text-bg-success">#${task.id}</span>
                                <div class="h6 mb-0">${task.title}</div>
                                </div>
                                <div class="taskState badge bg-info-subtle text-bg-info">${task.state}</div>
                                <hr>
                                <div class="mamama">
                                    <div class="d-flex justify-content-between">
                                    <button class="btn btn-sm btn-danger" data-remove-btn>Delete</button>
                                    <button class="btn btn-sm btn-primary" data-mark-btn>Mark important</button>
                                    <button class="btn btn-sm btn-warning" data-unmark-btn>Unmark important</button>
                                    <button type="button" class="btn bg-info-subtle" data-addNote-btn>Add note</button>
                                </div>
                                </div>
                                </div>
        `

        this.tasksContainer.prepend(wrapper)
    }

    // creating model template for each task
    createModelTemplate(task) {
        const wrapper = document.querySelector('#taskForms');
        wrapper.setAttribute('data-id', task.id);
        wrapper.innerHTML = `
                <div class="modal-header">
                    <h5 class="modal-title">Title #${task.id}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <select class="form-select" aria-label="Default select example" name="state">
                            <option value="work">Work</option>
                            <option value="study">Study</option>
                            <option value="personal">Personal</option>
                        </select>
                        
                      <span class="input-group-text" >Title</span>
                      <textarea class="form-control" aria-label="With textarea" name="title"></textarea>
                    <button type="button" class="btn btn-secondary-modal" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary-modal">Save changes</button>
                    </div>
                </div>
            `
    }
    // modal opens
    modalOpen(){
            this.myModal = new bootstrap.Modal(document.querySelector('#myModal'), {keyboard: false, backdrop: 'static',});
            console.log(this.myModal);
            this.myModal.show()
    }
    // rendering some tasks
    renderTasks(data){
        this.tasksContainer.innerHTML = '';
        const tasks = Array.isArray(data)?data:[data];
        for(const task of tasks){
            this.createTaskTemplate(task)
        }
    }
    // when we mark task important
    toggleImportant(usedElement){
        usedElement.style.backgroundColor = 'yellow'
        usedElement.classList.add('important');
    }
    // when we mark task as usual
    unToggleImportant(usedElement){
        usedElement.style.backgroundColor =  '#ccc';
        usedElement.classList.remove('important');
    }
    // clear all templates
    clearAllTemplate(){
        this.tasksContainer.innerHTML = '';
    }
    // delete task
    deleteTaskButton(deleteElement) {
        deleteElement.remove();
    }
    // no Notes Yet field which shows us this sign
    noNotesYet(){
        this.tasksContainer.innerHTML = `<h2 class="text-center p-3 mb-5 rounded bg-primary text-white">No Notes yet!</h2>`

    }
}
export default View;