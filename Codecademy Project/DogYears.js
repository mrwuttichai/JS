/*
convert your human age into dog years.
The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
*/
// set variable to store my age
const myAge = 28;
let earlyYears = 2;
earlyYears *= 10.5;
console.log(earlyYears);
let laterYears = myAge - 2;
laterYears *= 4
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);
let myName = 'Tay'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
/*
output
21
104
125
My name is tay. I am 28 years old in human years which is 125 years old in dog years.
*/