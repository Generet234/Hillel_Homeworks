'use strict';
/**
 * This code demonstrates a custom implementation of function context binding mechanisms
 * that mirror the behavior of JavaScript’s native call, apply, and bind methods by
 * explicitly controlling the value of `this` during function execution. The `user`
 * object stores basic properties and defines methods such as `sayHello`, which outputs
 * the current execution context and a greeting message, as well as `myCall`, `myApply`,
 * and `myBind`, which forward execution to a shared helper in order to invoke a target
 * function with a specified context and arguments. The `getFullName` function depends
 * on the dynamic value of `this` to access object properties and combines them with any
 * additional arguments passed at runtime. The `generalFunction` serves as the core
 * utility that normalizes invalid contexts, temporarily assigns the target function
 * to the context object, executes it with the provided arguments if any, returns the
 * result, and then removes the temporary reference. Overall, the code illustrates how
 * explicit context binding works internally in JavaScript and helps clarify the
 * underlying mechanics of dynamic `this` resolution and argument forwarding.
 */

const user = {
    firstName: 'John',
    lastName: 'Does',
    sayHello(){
        console.log(this);
        console.log(this.firstName +' Hello');
    },
    myCall(context, func, ...restArgs) {
    return generalFunction(context, func, restArgs);

},
    myApply(context, func,  argsArr) {
    if (Array.isArray(argsArr)) {
        return generalFunction(context, func,  argsArr);
    }

},
    myBind(context, func, ...restArgs) {
        return function (...args) {
            return generalFunction(context, func, restArgs.concat(args));
        }
    }
}
function getFullName(...restArgs) {
    return `${this.firstName} ${this.lastName} ${[...restArgs]}` ;
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
user.sayHello();
console.log(user.myCall(user, getFullName,4, 5, 6, 1));
console.log(user.myApply(user, getFullName,[2, 4, 7, 9]));
const bind = user.myBind(user, getFullName, 4,5,7,6);
console.log(bind(' Hello guys'));