import Model from './notes/Model.js';
import View from './notes/View.js';
import Controller from './notes/Controller.js';
const validationModel = {
    title: 'string',
    state: ['work', 'study', 'personal'],
    important: Boolean,
    createdAt: 'string',
}
const modelInstance = new Model('example', validationModel);
const viewInstance = new View();
const controllerInstance = new Controller(modelInstance, viewInstance);
controllerInstance.initialize();