'use strict';
/**
 * Handles click events on the container element with the data attribute 'data-read-more-btn'.
 *
 * When a click occurs, it checks if the clicked element or its closest ancestor has the class 'add-btn'.
 * If so, it creates a new <li> element, sets its text content to the value of the input inside the container,
 * and appends this <li> to the <ul> element inside the same container.
 *
 * It also checks if the clicked element or its closest ancestor has the class 'list'.
 * If this is true, it sets up a click event listener on an element with the class 'delete'
 * which, when clicked, removes the previously selected element from the DOM.
 *
 * @param {MouseEvent} event - The click event triggered by user interaction.
 */
const datasetNameButton = document.querySelector('[data-read-more-btn ]');
const input = datasetNameButton.firstElementChild;
datasetNameButton.addEventListener('click', (event) => {
    if (event.target.closest('.add-btn')){
        const ul = datasetNameButton.querySelector('ul');
        const newLi = document.createElement("li")
        newLi.textContent = input.value;
        ul.appendChild(newLi);
    }
    if (event.target.closest('.list')){
        const selected = event.target;
        const deleteElement = document.querySelector('.delete');
        if (selected !== deleteElement){
            deleteElement.addEventListener('click', (event) => {
                selected.remove();
            })
        }
    }
 })