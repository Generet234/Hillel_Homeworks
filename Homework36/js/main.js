import Model from "./models/UsersModel.js";
import View from "./views/UsersView.js";
import Controllers from "./controllers/UsersController.js";
const userModelInstance = new Model('example');
const userViewInstance = new View();
const userControllerInstance = new Controllers(userModelInstance,userViewInstance);
userControllerInstance.init();