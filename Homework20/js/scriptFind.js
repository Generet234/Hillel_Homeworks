'use strict';
/**
 * @typedef {Object} Item
 * @property {string} sku - Уникальный код товара.
 * @property {number} qty - Количество единиц товара.
 */

/**
 * @typedef {Object} Order
 * @property {number} id - Уникальный идентификатор заказа.
 * @property {Item[]} items - Массив товаров в заказе.
 */
const orders = [
    { id: 101, items: [{ sku: "A1", qty: 1 }, { sku: "C3", qty: 2 }] },
    { id: 102, items: [{ sku: "B2", qty: 1 }] },
    { id: 103, items: [{ sku: "B2", qty: 3 }, { sku: "A1", qty: 1 }] },
];

console.log(orders.find((order) => order.items.some((item) => item.sku === "B2")));