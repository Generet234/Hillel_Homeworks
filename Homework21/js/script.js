'use strict';
/**
 * This code provides custom implementations of call, apply, and bind for functions.
 * It includes a user object with firstName, lastName, and a sayHello method that logs
 * a greeting message including additional arguments. The getFullName function returns
 * a string combining the object's firstName, lastName, and extra arguments, relying
 * on 'this' to determine the context. The generalFunction helper executes a function
 * in a given context with an array of arguments, defaulting 'this' to globalThis if
 * the context is null, undefined, or a number. The myCall function executes a function
 * with a provided context and individual arguments, myApply executes a function with
 * a provided context and an array of arguments, and myBind returns a new function
 * permanently bound to the given context with optional pre-filled arguments. All
 * functions return the result of the executed function or false if no arguments are provided,
 * allowing simulation of standard JavaScript call, apply, and bind behavior without using
 * Function.prototype.call, apply, or bind directly.
 */
const user = {
    firstName: 'John',
    lastName: 'Does',
    sayHello(...restArgs){
        console.log(this);
        console.log(this.firstName +' ' +  this.lastName + ' ' + 'Hello' +' ' +  [...restArgs]);
    }
}
function getFullName(...restArgs) {
    return `${this.firstName} ${this.lastName} Hello ${[...restArgs]}` ;
}
function generalFunction(context, func, restArgs) {
    if (context === null || context === undefined || typeof context === 'number') {
        context = globalThis;
    }
    context.tempfunc = func;
    if (restArgs){
        const result = restArgs?.length? context.tempfunc(...restArgs) : context.tempfunc();
        delete context.tempfunc;
        return result;
    }
    else{
        const result = restArgs?.length? context.tempfunc() : false;
        delete context.tempfunc;
        return result;
    }
}
function myCall(context, func, ...restArgs) {
        return generalFunction(context, func, restArgs);

}

console.log(myCall(user, getFullName,  4, 5, 6, 1));

function myApply(context, func,  restArgs) {
    if (Array.isArray(restArgs)) {
        return generalFunction(context, func,  restArgs);
    }

}
console.log(myApply(user, getFullName, [2, 4, 7, 9]));
function myBind(context, func, ...restArgs) {
    return function (...args){
        return generalFunction(context, func, restArgs.concat(args));
    }
}
const resultFunction = myBind(user, getFullName,   3, 4, 6);
console.log(resultFunction(' Hello guys'));