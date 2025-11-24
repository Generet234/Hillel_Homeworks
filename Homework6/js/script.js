'use strict';
const name = prompt('What is your name?');
const age = prompt('What is your age?');
const liveCity = prompt('Where are you living right now?');
const questionJavaScript = prompt('Do you like JavaScript');
const yesFirst = 'yes';
const yesSecond = 'YES';
const yesThird = 'Yes';
if (questionJavaScript === yesFirst || questionJavaScript === yesSecond|| questionJavaScript === yesThird){
    const questionJavaScript = true;
    const greetings = `Hello`;
    alert(greetings + ` ${name}! You are ${age} years old, you are from ${liveCity}.Your attitude to Javascript is good`)

}
else{
    const questionJavaScript = false;
    const greetings = `Hello`;
    alert(greetings + ` ${name}! You are ${age} years old, you are from ${liveCity}.Your attitude to Javascript is bad`)
}