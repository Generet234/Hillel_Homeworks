'use strict';
/**
 * This code demonstrates custom implementations of `call`, `apply`, and `bind`
 * in JavaScript by manually controlling the `this` context.
 *
 * A temporary method (`tempfunc`) is added to the provided context object in order
 * to invoke a function as an object method, which allows `this` inside the function
 * to correctly reference the given context. After execution, the temporary method
 * is removed to avoid mutating the object permanently.
 *
 * `generalFunction` is a helper that performs the core logic of binding `this`
 * and optionally forwarding arguments to the target function.
 *
 * `myCall` works like `Function.prototype.call`, accepting arguments individually.
 * `myApply` works like `Function.prototype.apply`, accepting arguments as an array.
 * `myBind` works like `Function.prototype.bind`, returning a new function with a
 * permanently bound context that can be invoked later.
 *
 * This implementation is for educational purposes and illustrates how `this`
 * binding works internally in JavaScript.
 */

const user = {
    firstName: 'John',
    lastName: 'Does',
}
function getFullName(suffix) {
    if (suffix){
        return suffix + ' ' + `${this.firstName} ${this.lastName}`;
    }
    else {
        return ` ${this.firstName} ${this.lastName}`;
    }
}
function generalFunction(context, func, suffix) {
    context.tempfunc = func;
    const result = suffix?.length? context.tempfunc(suffix) : context.tempfunc();
    delete context.tempfunc;
    return result;
}
function myCall(context, func, suffix, ...restArgs) {
    return generalFunction(context, func, suffix, restArgs);

}

console.log(myCall(user, getFullName, 'Bad boy'));

function myApply(context, func, suffix, restArgs) {
    return generalFunction(context, func, suffix, restArgs);

}
console.log(myApply(user, getFullName, 'Bad boy'));
function myBind(context, func, suffix) {
    return function (){
        return generalFunction(context, func, suffix);
    }
}
const resultFunction = myBind(user, getFullName, 'Good boy');
console.log(resultFunction());