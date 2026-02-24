
class Model {
    #key = null;
    #validationModel = null;

    constructor(key, validationModel) {
        this.#key = key;
        this.#validationModel = validationModel;
    }
    // data validation for wrong keys
    #validate(data) {
        const failedField = [];
        for (const key in data) {
            if (typeof data[key] === 'string' && data[key].length < 3) {
                failedField.push({key, message: `Your title is less than 3`});
                continue;
            }
            if(!this.#validationModel.hasOwnProperty(key)) {
                failedField.push({key, message: `Field does not exist on validation model`});
                continue;
            }
            if(Array.isArray(this.#validationModel[key]) && !this.#validationModel[key].includes(data[key])) {
                failedField.push({key , message: 'One of fields are not allowed' });
            }
        }
        if (failedField.length > 0) {
            throw new Error(`Failed with field ${JSON.stringify(failedField)}`);
        }
        return true;
    }
    // creating data
    create(data) {
        this.#validate(data)
        const readStorage = this.readAll();
        const dataStorage = {
            createdAt: new Date(),
            important: false,
            id: this.readAll().length ? readStorage.at(-1).id + 1 : 1,
            ...data
        }
        readStorage.push(dataStorage);
        console.log(readStorage);
        localStorage.setItem(this.#key, JSON.stringify(readStorage));
        return dataStorage;
    }
    // use this when we mark task as an important
    toggleImportant(usedElement){
        const id = Number(usedElement.getAttribute('data-id'));
        let data = JSON.parse(localStorage.getItem(this.#key));
        let dataElement = data.find(x => x.id === id);
        dataElement.important = true;
        localStorage.setItem(this.#key, JSON.stringify(data));
    }
    // use this when we want to return task to the usual state
    unToggleImportant(usedElement){
        const id = Number(usedElement.getAttribute('data-id'));
        let data = JSON.parse(localStorage.getItem(this.#key));
        let dataElement = data.find(x => x.id === id);
        dataElement.important = false;
        localStorage.setItem(this.#key, JSON.stringify(data));
    }
    // use this when we need to receive info about all storage
    readAll(){
        const data = JSON.parse(localStorage.getItem(this.#key))
        return data? data: []
    }
    // use this when we need to delete some task from storage
    delete(id){
        const dataStorage = this.readAll()
        if(!dataStorage.length) throw new Error(`Cannot delete entity with id ${id}`);
        const findElement = dataStorage.findIndex(element => element.id === id);
        const removedElement = dataStorage.splice(findElement, 1)[0];
        localStorage.setItem(this.#key, JSON.stringify(dataStorage));
        console.log(dataStorage)
        return removedElement;
    }
    // use this when we need to clear our storage
    clearAll(){
        localStorage.setItem(this.#key, JSON.stringify([]));
    }
}
export default Model;