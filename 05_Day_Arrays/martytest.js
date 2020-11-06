const companies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
 
//console.log('Companies:', companies);
 
var str = companies.join(' ');

console.log(companies.join(', '));
console.log(str);

console.log("Please enter a company name, and I will tell you if it is in the list");
var company = window.prompt('Please enter a company.  Press OK when done.', '');
console.log(company);
 
if (company.match(/Facebook/gi)) {
    console.log("Facebook is on the list")
} else if (company.match(/Google/gi)) {
    console.log("Google is on the list")
} else if (company.match(/Microsoft/gi)) {
    console.log("Google is on the list") 
} else if (company.match(/Apple/gi)) {
        console.log("Apple is on the list")
} else if (userMonth.match(/IBM/gi)) {
        console.log("IBM is on the list")
} else if (userMonth.match(/Oracle/gi)) {
            console.log("Oracle is on the list")
} else if (userMonth.match(/Amazon/gi)) {
            console.log("Amazon is on the list")
} else if (userMonth.match(/August/gi)) {
        console.log("Google is on the list") 
} 