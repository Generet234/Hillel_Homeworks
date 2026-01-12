'use strict';
/**
 * Handles click events on the container element with the data-read-more-btn attribute
 * using event delegation to toggle the visibility of content blocks. When a click
 * occurs on an element with the .add-btn class, the handler finds the closest parent
 * element with the .item class and switches between collapsed and expanded states by
 * hiding or showing elements with the .btn and .hidden classes. The function updates
 * the button text between "Read more" and "Hide", toggles the "expanded" CSS class to
 * track the current state, and synchronizes the hidden property of the related elements
 * to ensure correct visual behavior without creating multiple event listeners.
 *
 * @param {MouseEvent} event A click event triggered on the container element.
 */
const datasetNameButton = document.querySelector('[data-read-more-btn ]');
datasetNameButton.addEventListener('click', (event) => {
    const btn = event.target.closest('.add-btn');
    const item = btn.closest('.item');
    if (!btn) return;
    if (!item) return;
    const title = item.querySelector('.btn');
    const hiddenText = item.querySelector('.hidden');
    const expanded = btn.classList.contains('expanded');
    btn.classList.toggle('expanded');
    btn.textContent = expanded? 'Read more' : 'Hide';
    hiddenText.hidden = expanded;
    title.hidden = !expanded;
 })