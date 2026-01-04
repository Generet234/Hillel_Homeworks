'use strict';
/**
 * This code defines a `user` object with `firstName` and `lastName` properties and a function `getFullName` that returns the user's full name combined with any additional arguments.
 *
 * It also defines a helper function `generalFunction` that allows calling any function with a specified context and arguments by temporarily assigning the function to a property of the context, invoking it, and then deleting that property.
 *
 * Three methods are added to `Function.prototype`:
 * - `myCall`, which invokes the function with a given context and any number of arguments using `generalFunction`.
 * - `myApply`, which invokes the function with a given context and an array of arguments using `generalFunction`.
 * - `myBind`, which returns a new function that, when called, invokes the original function with the bound context and a concatenation of initially bound arguments and any arguments provided at call time.
 *
 * The code demonstrates usage by calling `getFullName` with `myCall` passing multiple arguments, with `myApply` passing an array of arguments, and with `myBind` creating a bound function which is then invoked with additional arguments, and logs all results to the console.
 */
const user = {
    firstName: 'John',
    lastName: 'Does'
}
function getFullName(...restArgs) {
    return `${this.firstName} ${this.lastName} ${restArgs}`;
}
function generalFunction(context, func, restArgs) {
    if (context === null || context === undefined || typeof context === 'number') {
        context = globalThis;
    }
    context.tempFunc = func;
     if (restArgs){
         const result = restArgs?.length? context.tempFunc(...restArgs) : context.tempFunc();
         delete context.tempFunc;
         return result;
     }
     else{
         const result = restArgs?.length? context.tempFunc() : false;
         delete context.tempFunc;
         return result;
     }

}
Function.prototype.myCall = function(context,  ...restArgs) {
    return generalFunction(context, this, restArgs);
}
Function.prototype.myApply = function(context,  argsArr) {
    if (Array.isArray(argsArr)) {
        return generalFunction(context, this, argsArr);
    }
}
Function.prototype.myBind = function(context, ...restArgs) {
    const fn = this;
    return function (...args) {
        return generalFunction(context,fn, restArgs.concat(args));
    }
}
console.log(getFullName.myCall(user, 4, 5, 6, 1));
console.log(getFullName.myApply(user, [2, 4, 7, 9]));
const bind = getFullName.myBind(user,  4,5,7,6);
console.log(bind(' Hello guys'));