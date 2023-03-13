const password = 'password';

password.length >= 12 ? console.log('password is very strong so Welcome!') : password.length >= 8 ? console.log('Welcome!') 
: console.log('Sorry! the password is too short');


//expression function ป้องการการเกิด hoiting ไม่สามารถกำหนดค่า myinfo('Tay'); ก่อนได้//
const myinfo = function(name){
    console.log('Hello ' + name);
};
myinfo('Tay');

//arrow function
const myinfo = (name) => {
    console.log('Hello ' + name);
};
myinfo('Tay');

function addNumbers(a, b) {
    return a + b;
}
console.log (addNumbers (5,3));

const myinfo = name => console.log('Hello '+ name);
muinfo('Tay');


function functionName(firstName,location,hobby) {
    console.log("Hi, my name is " + firstName + " I live in " + location + " and enjoy "+hobby);
  }
  functionName('Tay','Nan','Playing games');

  
    /*Create a day of the week translator.
Your program should read a variable called “dayNumber”,
and print (with console.log) the corresponding day of the week, where 0 is Sunday and 6 is Saturday.
For any other values, your program should print “Invalid day number”.
Test your program for all week days values.*/
  let dayNumber = 0;
  if(dayNumber===6){
    console.log("Saturday");
  } else if (dayNumber===5){
    console.log("Friday");
  } else if (dayNumber===4){
    console.log("Thursday");
  } else if (dayNumber===3){
    console.log("Wednessday");
  } else if (dayNumber===2){
    console.log("Tuesday");
  } else if (dayNumber===1){
    console.log("Monday");
  } else if (dayNumber===0){
    console.log("Sunday");
  } else{
    console.log("Invalid day number");
  }