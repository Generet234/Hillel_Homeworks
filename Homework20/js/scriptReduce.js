'use strict';
/**
 * @typedef {Object} Transaction
 * @property {number} id - The unique identifier for the transaction.
 * @property {string} category - The category of the expense.
 * @property {number} amount - The expense amount.
 */

/**
 * List of financial transactions.
 * @type {Transaction[]}
 */
const tx = [
    { id: 1, category: "food", amount: 12 },
    { id: 2, category: "food", amount: 8 },
    { id: 3, category: "taxi", amount: 15 },
    { id: 4, category: "books", amount: 20 },
    { id: 5, category: "taxi", amount: 7 },
];
/**
 * Aggregated expenses grouped by category.
 * The key is the category name, and the value is the total amount.
 * @type {Object<string, number>}
 */
    const result = tx.reduce(
        (accumulator,item) => {
            const category = item.category;
            if (!accumulator[category]) {
                accumulator[category] = 0;
            }
            accumulator[category] += item.amount;
            return accumulator;
        }
        ,{}
    );
console.log(result);