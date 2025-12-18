'use strict';
/**
 * @typedef {Object} Transaction
 * @property {number} id - Unique identifier of the transaction.
 * @property {string} category - Category of the transaction (e.g., "food", "taxi", "books").
 * @property {number} amount - Amount of the transaction.
 */

/**
 * Array of transactions.
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
 * Initial value for summing amounts.
 * @type {number}
 */

/**
 * Calculates the total amount for "food" category.
 * Takes the first two transactions in the array and sums their amounts.
 * @type {number}
 */
const initialValue = 0;
    const resultFood = tx
        .slice(0,2)
        .reduce(
        (accumulator,currentValue) => accumulator + currentValue.amount,
        initialValue,
    );
/**
 * Array of transactions for the "taxi" category.
 * Takes transactions at indices 2 and 4.
 * @type {Transaction[]}
 */
    const size = [...tx.slice(2,3),...tx.slice(4,5)];
/**
 * Calculates the total amount for "taxi" category.
 * @type {number}
 */
    const resultTaxi = size
        .reduce(
            (accumulator,currentValue) => accumulator + currentValue.amount,
            initialValue,
            );
/**
 * Calculates the total amount for "books" category.
 * Takes the transaction at index 3.
 * @type {number}
 */

    const resultBooks = tx
        .slice(3,4)
        .reduce(
            (accumulator,currentValue) => accumulator + currentValue.amount,
            initialValue,
        );
/**
 * Object with total amounts for each category.
 * @type {{food: number, taxi: number, books: number}}
 */
    const resultAnswer = {food : resultFood, taxi : resultTaxi,books : resultBooks};
    console.log(resultAnswer);