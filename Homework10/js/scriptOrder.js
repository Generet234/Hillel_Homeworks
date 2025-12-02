'use strict';
const order = {
    total : "9520",
    currency : "Usd",
    isPaid : true,
    delivery : "yes",
    priority : "1"
}
const {total, currency , delivery , priority,isPaid} = order;
const numberTotal = Number(total);
const deliveryCompare = !!delivery;
const priorityCompare = !!priority;
if (numberTotal > 1000) {
    alert("Це замовлення є великим");
}
if (isPaid === false){
    alert("Order is not paid");
}
if (isPaid === true && deliveryCompare === true){
    alert("Paid order with delivery");
}
if (numberTotal > 1000 && isPaid === true){
    alert("High-value paid order");
}
if (isPaid === false || deliveryCompare === false){
    alert("Paid order without delivery");
}
if (priorityCompare === true){
    alert("Paid order without delivery" + " [PRIORITY]");
}
const result = total == numberTotal;
console.log(result);
const result2 = total === numberTotal;
console.log(result2);
