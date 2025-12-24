'use strict';
/**
 * This code demonstrates custom implementations of the native JavaScript
 * methods `Function.prototype.call`, `Function.prototype.apply`, and
 * `Function.prototype.bind`.
 *
 * An example `user` object is used as the execution context (`this`) for
 * the function `getFullName`, which returns the user's full name combined
 * with any additional arguments passed to it.
 *
 * `getFullName` uses the `this` keyword to access `firstName` and `lastName`
 * from the provided context and appends all received rest arguments as a string.
 *
 * `generalFunction` is a helper that temporarily assigns the target function
 * to the provided context object, invokes it with or without arguments,
 * and then removes the temporary reference to avoid polluting the context.
 *
 * `myCall` mimics the behavior of `Function.prototype.call` by accepting
 * a context, a function, and a list of arguments, then executing the function
 * with the given context.
 *
 * `myApply` mimics the behavior of `Function.prototype.apply` by accepting
 * a context, a function, and an array of arguments, then executing the function
 * with the given context.
 *
 * `myBind` mimics the behavior of `Function.prototype.bind` by returning
 * a new function with a permanently bound context and optional preset arguments.
 * When the returned function is invoked, preset arguments are combined with
 * the new ones.
 *
 * Overall, this example illustrates how function context binding works in
 * JavaScript and how `call`, `apply`, and `bind` can be recreated using
 * basic language features.
 */
const user = {
    firstName: 'John',
    lastName: 'Does',
}
function getFullName(...restArgs) {
        return `${this.firstName} ${this.lastName}` + ' ' + `${restArgs}`;
}
function generalFunction(context, func, restArgs) {
    context.tempfunc = func;
    if (restArgs){
        const result = restArgs?.length? context.tempfunc(...restArgs) : context.tempfunc();
        delete context.tempfunc;
        return result;
    }
    else {
        return new Error('Don`t have any numbers');
    }
}
function myCall(context, func, ...restArgs) {
    return generalFunction(context, func, restArgs);

}

console.log(myCall(user, getFullName,  4, 5, 6, 1));

function myApply(context, func,  restArgs) {
    return generalFunction(context, func,  restArgs);

}
console.log(myApply(user, getFullName, [2, 4, 7, 9]));
function myBind(context, func, ...restArgs) {
    return function (...args){
        return generalFunction(context, func, restArgs.concat(args));
    }
}
const resultFunction = myBind(user, getFullName,   3, 4, 6);
console.log(resultFunction(' Hello guys'));