'use strict';
const systemSettings ={
    darkMode: true,
    fontSize: "18",
    language: "en",
    betaAccess: "true"
}
const {darkMode, fontSize, language,betaAccess} = systemSettings;
const numberFontSize = Number(fontSize);
const compareBetaAccess = !!betaAccess;
const isLargeFont = numberFontSize >= 18 ;
if (darkMode === true && isLargeFont === true) {
    console.log("Dark mode + large font");
}
if (darkMode === true){
    console.log("Dark mode");
}
if (isLargeFont === true){
    console.log("Large font");
}
if (compareBetaAccess === true){
    console.log("Default settings" +" (Beta tester)" );
}
else {
    console.log("Default settings");
}