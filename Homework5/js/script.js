'use strict';
const question = 'How old are you?';
const userAge = prompt(question);
const input = parseInt(userAge); // parseInt is a function which makes string into number
if (userAge === null || userAge === '') {
    alert(`Age is not specified`);
}
else if (input < 18) {
    const requirement = prompt('You are less than 18 years old up. Do you have an adult with you?');
    if (confirm(requirement) || requirement == 'Yes'){
        alert(`Access is allowed with adult permission`);
    }
    else if (requirement == 'No' || confirm(requirement) === false) {
        alert(`Access is forbidden`);
    }
}
else if (input >= 18){
    alert(`Access is allowed. Enjoy watching film`);
}