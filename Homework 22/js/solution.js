let ul = document.getElementById('ulId');
/**
 * Retrieves a list element from the DOM by its identifier and iterates over its child nodes in order to collect
 * the textual content of each HTML element into a separate array. During iteration, the code verifies that each
 * child is an instance of HTMLElement to avoid processing non-element nodes, then extracts and stores its
 * textContent while also logging it to the console. After processing all child elements, the total number of
 * collected items is output along with the resulting array, which represents all text values found inside
 * the children of the specified unordered list.
 */
const arr2 = [];
for (const elementFirst of ul.children) {
    if (elementFirst instanceof HTMLElement) {
        arr2.push(elementFirst.textContent);
        console.log(elementFirst.textContent);
    }
}
console.log(`${arr2.length} - загальна кількість елементів`);
console.log(arr2);