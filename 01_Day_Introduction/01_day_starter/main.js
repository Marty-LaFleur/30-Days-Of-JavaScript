// the variable values can be accessed from other variable.js files
const personalInfo = {
    firstName = marty,lastName = lafleur,country = USA,city = Muncie,age = 52,isMarried = false;
}
var personalInfo;
    personalInfo = personalInfo;
  
const geekyMathStuff = {
    gravity = 9.81,boilingPoint = 100,PI = 3.14;
}
var geekyMathStuff;
    geekyMathStuff = geekyMathStuff;

const morePersonalInfo = {
    name = marty,
    job = aWeSoMeOlOgIsT,
    live = USA;
    }
  
var morePersonalInfo;
  morePersonalInfo = morePersonalInfo;

console.log (personalInfo);
console.log (geekyMathStuff); 
console.log (morePersonalInfo);