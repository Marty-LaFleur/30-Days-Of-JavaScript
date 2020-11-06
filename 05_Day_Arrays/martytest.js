const companies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
 
var str = companies.join(' ');

console.log('COMPANIES:',companies.join(', '));
 
console.log("Facebook",companies[0].match(/o/gi))
console.log("Google",companies[1].match(/o/gi))
console.log("Microsoft",companies[2].match(/o/gi))
console.log("Apple",companies[3].match(/o/gi))
console.log("IBM",companies[4].match(/o/gi))
console.log("Oracle",companies[5].match(/o/gi))
console.log("Amazon",companies[6].match(/o/gi))
