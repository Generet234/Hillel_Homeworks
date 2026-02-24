class Controller {
    #model = null;
    #view = null;
    constructor(model, view) {
        this.#model = model;
        this.#view = view;
    }

    initialize() {
        document.addEventListener('DOMContentLoaded', () => {
            this.#view.form.addEventListener('submit', this.#submitHandler);
            this.#view.clearButton.addEventListener('click',this.#clearHandler);
            this.#view.tasksContainer.addEventListener('click',this.#allButtonsTaskHandler);
            this.#view.modalBtn.addEventListener('submit', this.#buttonModalHandler);
            this.#savedAllDataHandler()
        });
    }
    #buttonModalHandler = (e) => {
        e.preventDefault();
        const tasks = this.#model.readAll();
        console.log(tasks);
        const form = e.target;
        const formData = {};
        const inputs = form.querySelectorAll('input,textarea,select');
        inputs.forEach(({name, value}) => formData[name] = value);
        const getId = Number(form.getAttribute('data-id'));
        if(getId){
            const index = tasks.findIndex(task => task.id === getId);
            if(index > -1){
                tasks[index] = {
                    ...tasks[index],
                    ...formData,
                }
            }
        }
        else{
            tasks.push(formData)
        }
        console.log(this.#view.myModal);
        localStorage.setItem('example', JSON.stringify(tasks))
        this.#view.renderTasks(tasks);
        this.#view.myModal.hide();
    }
    #savedAllDataHandler = () => {
        const tasks = JSON.parse(localStorage.getItem('example')) || [];
        this.#view.renderTasks(tasks);
        if(tasks.length === 0){
            this.#view.noNotesYet()
        }
    }
    //Working with button Clear All
    #clearHandler = (e) => {
        e.preventDefault();
        this.#model.readAll();
        if (this.#model.readAll().length){
            this.#model.clearAll();
            this.#view.clearAllTemplate();
            this.#view.noNotesYet();
        }
    }

    //Working with all buttons on card/task
    #allButtonsTaskHandler = (e) => {
        e.preventDefault();
        const usedElement = e.target.closest('[data-id]');
        if (e.target.closest('[data-remove-btn]')){
            this.#view.deleteTaskButton(usedElement);
            this.#model.delete(Number(usedElement.getAttribute('data-id')));
        }
        if (e.target.closest('[data-mark-btn]') && !usedElement.classList.contains('important')){
            this.#model.toggleImportant(Number(usedElement.getAttribute('data-id')));
            this.#view.toggleImportant(usedElement);
        }
        if (e.target.closest('[data-unmark-btn]') && usedElement.classList.contains('important')){
            this.#model.toggleImportant(Number(usedElement.getAttribute('data-id')));
            this.#view.toggleImportant(usedElement);
        }
        if(e.target.closest('[data-addNote-btn]')){
            const id = Number(usedElement.getAttribute('data-id'));
            const foundElement = this.#model.readAll();
            this.#view.createModelTemplate(foundElement[id-1])
            this.#view.modalOpen();
        }
        return false;
    }

    //Working with button submit
    #submitHandler = (e) => {
        e.preventDefault();
        const formData = {};
        const inputs = e.target.querySelectorAll('input,textarea,select');
        inputs.forEach(({name, value}) => formData[name] = value);
        this.#createTaskHandler(formData);
    }

    //creating card
    #createTaskHandler = (data) => {
        const saved = this.#model.create(data);
        if (this.#view.tasksContainer.childNodes.length === 0){
            this.#view.createTaskTemplate(saved);
        }
        else {
            this.#view.renderTasks(data);
        }
    }

}
export default Controller;