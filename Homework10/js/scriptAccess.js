'use strict';
const user = {
    name:'Ivan',
    age:20,
    email:'doika@gmail.com',
    isSubscribed:true,
    balance:"250.2",
    verified:"1",
}
const {name,age,email,isSubscribed,balance,verified} = user;
const balanceCount = Number(balance);
const trulyVerified = Boolean(verified);
if (age >= 18 && trulyVerified === true && (isSubscribed === true || balanceCount > 0) ){
    const resultAccess = age >= 18 && trulyVerified === true && isSubscribed === true && balanceCount > 0;
    console.log(resultAccess);
    alert(`You have access!`);
}
if (age == '20'){
    const result = age == '20';
    console.log(result);
}
if (age === '20'){
    const result2 = age === '20';
    console.log(result2);
}
else if (age < 18){
    alert(`Access restricted due to age`);
}