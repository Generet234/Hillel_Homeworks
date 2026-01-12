'use strict';
/**
 * Handles click events on the list.
 *
 * This function delegates clicks for two purposes:
 * 1. Adding a new list item when the .add-btn button is clicked.
 * 2. Removing a list item when the .delete button inside a list item is clicked.
 *
 * It uses the input inside the datasetNameButton container to get the text
 * for the new item and appends the item before the element with class 'add'.
 *
 * @param {MouseEvent} event - The click event triggered on the list.
 */
const ul = document.querySelector('.list');
const datasetNameButton = document.querySelector('[data-read-more-btn]')
const li = document.querySelector('.item');
ul.addEventListener('click', (event) => {
    if (event.target.closest('.add-btn')) {
        const input = datasetNameButton.querySelector('input');

        const newLi = document.createElement("li")
        newLi.className = 'item';

        const button = document.createElement("button");
        button.className = 'delete';
        button.textContent = '✖';

        const span = document.createElement("span");
        span.textContent = input.value;
        console.log(newLi.className);
        newLi.appendChild(span);
        newLi.appendChild(button);
        ul.insertBefore(newLi, ul.querySelector('.add'));
    }
    if (event.target.closest('.list')) {
        ul.onclick = function (event) {
                if (event.target.classList.contains('delete')) {
                    const li = event.target.closest('li');
                    if (li) {
                        li.remove();
                    }
                }
            }
        }
})


