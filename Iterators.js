//.forEach

const letters = ['a','b','c', 'd', 'a', 'c', 'a'];
let count = {}; //create empty object to keep track the count
letters.forEach(item =>{
    if (count[item]){ //check if we have an letter in
        count[item]++;
    }else{
        count[item] = 1;
    }
});
console.log(count);

//.mape

const storeUSD = [5, 6, 7, 8];

const storeEUR = storeUSD.map(value => value*=0.85);

console.log(storeUSD);
console.log(storeEUR);

//

let storeUSD = [5, 6, 7, 8];

function toEuros(value){
    value *= 0.85;
    return value;
}

let storeEUR = storeUSD.map(toEuros);
console.log(storeUSD);
console.log(storeEUR);

//.fillter

const numbers =['apple','banana','orange','pineapple'];
//filter only positive numbers
const filtered = numbers.filter(n => n !== 'apple');    //if it match with this then add to new array
console.log(filtered);

//

randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
    return num < 250;
  });
  console.log(smallNumbers);


//