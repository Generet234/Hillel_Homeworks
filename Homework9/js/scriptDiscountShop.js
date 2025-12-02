'use strict';
const hasPromoCode = !!prompt('Do you have a promo code?');
const cartTotal = prompt('How much do you have in your pocket?');
const isBlackFriday = !!prompt('Is black friday today?');
console.log(cartTotal);
console.log(hasPromoCode);
console.log(isBlackFriday);
if (Number(cartTotal)>= 100 && (hasPromoCode === true || isBlackFriday === true)) {
    const isDiscountApplied = Number(cartTotal) >= 100 && (hasPromoCode === true || isBlackFriday === true);
    if (isDiscountApplied === true || String(isDiscountApplied) === `Yes`) {
        console.log('Discount is applied');
    }
    else if (String(isDiscountApplied) === `No` || isDiscountApplied === false) {
        const noDiscount = isDiscountApplied;
        console.log('Discount is not applied');
        console.log(noDiscount);
    }
}