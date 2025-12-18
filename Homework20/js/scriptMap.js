'use strict';
/**
 * @typedef {Object} Product
 * @property {number} id - Unique product identifier
 * @property {string} name - Product name
 * @property {number} price - Product price in dollars
 * @property {boolean|string} inStock - Product availability status
 */
const products = [
    { id: 31, name: "Mouse", price: 25, inStock: true },
    { id: 2, name: "Keyboard", price: 70, inStock: false },
    { id: 3, name: "Monitor", price: 210, inStock: true },
];
    if (products[1].inStock === false) {
        products[1].inStock = false + ' out of stock';
    }
    const array = products.map(({name,price,inStock}) => `${name}: $${price}, inStock: ${inStock}`);

console.log(array);