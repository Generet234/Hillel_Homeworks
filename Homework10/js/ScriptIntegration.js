'use strict';
const user = {
    name:'Ivan',
    age:20,
    email:'doika@gmail.com',
    isSubscribed:true,
    balance:"250.2",
    verified:"1",
}
const systemSettings ={
    darkMode: true,
    fontSize: "18",
    language: "en",
    betaAccess: "true"
}
const order = {
    total : "9520",
    currency : "Usd",
    isPaid : true,
    delivery : "yes",
    priority : "1"
}

const {name,age,email,isSubscribed,balance,verified} = user;
const balanceCount = Number(balance);
const trulyVerified = !!verified;
const {total, currency , delivery , priority,isPaid} = order;
const numberTotal = Number(total);
const {darkMode, fontSize, language,betaAccess} = systemSettings;
const numberFontSize = Number(fontSize);
if (age >= 18 && trulyVerified === true && (isSubscribed === true || balanceCount > 0) ) {
    const resultAccess = age >= 18 && trulyVerified === true && isSubscribed === true && balanceCount > 0;
    console.log(resultAccess);
    alert(`You have access!`);

    if (resultAccess === true) {
        const finalAccess = Object.assign({}, user, systemSettings, order); // Blendering 3 objects into 1 new object
        console.log(finalAccess);
        console.log("Full access granted");
    }
}
if (numberTotal > 0 || isPaid === true) {
    const finalAccess = Object.assign({}, user, systemSettings, order); // Blendering 3 objects into 1 new object
    console.log(finalAccess);
    console.log("Full access granted");
}
if (numberFontSize >12 && language === "en" ) {
    const finalAccess = Object.assign({}, user, systemSettings, order); // Blendering 3 objects into 1 new object
    console.log(finalAccess);
    console.log("Full access granted");
}
else {
    console.log("No access granted because one of setting of our objects is forbidden you to get an access");
}