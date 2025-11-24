'use strict';
let question = 'What is your name?';
const name = prompt(question);
if (confirm(name)){ // Confirm  is a built-in function that displays a dialog box with two buttons:OK or Cancel.And returns true or false.
    alert(`Hello  ${name}, how are you?`);
}