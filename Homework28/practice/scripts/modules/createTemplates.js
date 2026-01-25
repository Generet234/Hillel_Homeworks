'use strict';
const createItemTemplate = ({id,fullName, phone, address}) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item')
    li.dataset.id = id;
    li.innerHTML = `${fullName} | ${phone} | ${address}`;
    return li;
}

const createButtonTemplate = () => {
    const button = document.createElement('button');
    button.classList.add('list-group-item');
    button.type = 'button';
    button.textContent = 'Delete';
    return button;
}
export {createItemTemplate, createButtonTemplate}