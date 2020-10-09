let nums = [1, 2, 3];
nums = 10;
console.log(nums); // [10, 2, 3]

const numbers = [1, 2, 3];
console.log(nums === numbers); // false

const userOne = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland',
};
const userTwo = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland',
};
console.log(userOne === userTwo); // false
console.log(nums === numbers); // true
console.log(userOne === userTwo); // true