let ul = document.getElementById('ulId');
/**
 * This code snippet collects the text content of all child elements
 * of a specific <ul> element in the DOM.
 *
 * First, the <ul> element is selected using its ID ('ulId') and stored
 * in the variable `ul`.
 *
 * An empty array `arr2` is created to store the text content of each
 * child element.
 *
 * A `for...of` loop iterates over all children of the `ul` element.
 * Inside the loop, it checks if the current child (`element`) is an
 * instance of `HTMLElement` to ensure that only valid HTML elements
 * are processed.
 *
 * If the check passes, the text content of the element (`element.textContent`)
 * is pushed into the `arr2` array.
 *
 * Finally, the array `arr2`, containing the text content of all <ul>
 * children, is logged to the console.
 */
const arr2 = [];
for (const element of ul.children) {
    if (element instanceof HTMLElement) {
        arr2.push(element.textContent);
    }
}
console.log(arr2);