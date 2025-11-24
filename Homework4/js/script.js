'use strict';
const questionPrice = 'Enter primary price';
const questionSale = 'Size of sale in percents';
let price = +prompt(questionPrice); // + makes our words in number type
let sale = +prompt(questionSale); // + makes our words in number type
const booleanTrue = true;
if (isNaN(price) === booleanTrue || isNaN(sale) === booleanTrue ){ // isNaN(variable) is made to show us checking price and sale type for Not an Number
    alert(`Input error`);
}
else{
    if (sale < 0 || price < 0 || sale > 100 ){
        alert(`Input error`);
    }
    else{
        let newPrice = price - (price*sale)/100;
        alert(`Primary price is ${price}, sale is :${sale}. Price with sale is ${newPrice}`);
    }
}
