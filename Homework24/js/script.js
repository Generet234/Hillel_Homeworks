'use strict';
/**
 * Click event handler for the "Read more / Hide" button inside the container with [data-read-more-btn].
 * When clicked, it performs the following actions:
 * 1. Finds the closest button with the class '.add-btn'.
 * 2. Finds the parent element with the class '.item'.
 * 3. Finds the title element ('.btn') and the hidden text element ('.hidden') inside the item.
 * 4. Hides the title and shows the hidden text.
 * 5. Changes the button text to 'Hide' and sets dataset.className = 'expanded'.
 * 6. After 4 seconds, it automatically:
 *    - removes the 'expanded' class from the button,
 *    - changes the button text back to 'Read more',
 *    - hides the hiddenText element and shows the title element.
 *
 * @event click
 * @param {MouseEvent} event - The click event triggered on a button inside [data-read-more-btn] container.
 * @example
 * // HTML structure:
 * // <div data-read-more-btn>
 * //   <div class="item">
 * //     <h1 class="btn">Title</h1>
 * //     <p class="hidden">Some hidden text</p>
 * //     <button class="add-btn">Read more</button>
 * //   </div>
 * // </div>
 *
 * // JS usage:
 * // datasetNameButton.addEventListener('click', handlerFunction);
 */

const datasetNameButton = document.querySelector('[data-read-more-btn ]');
datasetNameButton.addEventListener('click', (event) => {
    const btn = event.target.closest('.add-btn');
    const item = btn.closest('.item');
    const title = item.querySelector('.btn');
    const hiddenText = item.querySelector('.hidden');
    title.hidden = true
    hiddenText.hidden = false;
    btn.textContent = 'Hide';
    btn.dataset.className = 'expanded';
    setTimeout(() =>{
                btn.classList.remove('expanded');
                btn.textContent = 'Read more';
                hiddenText.hidden = true;
                title.hidden = false;
    },4000)
 })