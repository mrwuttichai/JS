//JS-05 Arrays and Loops

//Open up a text editor of your choice and complete the following Javascript exercises.

/*Exercise #1
Part 1
There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.*/

const customerLine = ["Sofia", "David", "Juan"];

/*Part 2
Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?*/

customerLine.push("Sara","Augustin");  // ["Sofia", "David", "Juan", "Sara", "Augustin"]

const beingCalled = customerLine.shift();
console.log(beingCalled); // "Sofia"
console.log(customerLine); // ["David", "Juan", "Sara", "Augustin"]

/*Part 3
It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?*/

customerLine.splice(1,0, "Renata");
console.log(customerLine); //[ 'David', 'Renata', 'Juan', 'Sara', 'Augustin' ]

//หรือถ้าไม่รู้indexของelementที่ต้องการแทรกข้องมูล
const davidIndex = customerLine.indexOf("David"); //หาindexของDavid
console.log(davidIndex); // index 0
customerLine.splice(davidIndex + 1,0, "Renata"); //ใช้.splice()เพื่อใส่RenataในindexของDevid(0)+1= index1 , 0=ไม่ต้องการลบelementใดออกเลย
console.log(customerLine); //[ 'David', 'Renata', 'Juan', 'Sara', 'Augustin' ]


//Exercise #2

/*Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *
*/

for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line);
  }

/*This program first initializes a loop that runs from 1 to 5. Inside this loop, 
it creates an empty string called line. It then initializes a nested loop that runs from 1 to i, 
where i is the current iteration of the outer loop.

Inside the nested loop, the program appends an asterisk and a space to the line string on each iteration. 
Once the nested loop is finished, the program logs the line string to the console, which prints the current row of the pattern.

This program doesn't use the var keyword, but it uses the let keyword instead to declare variables. 
This is because let is a modern way of declaring variables in JavaScript that has some advantages over var.*/


//Exercise #3

//– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.

let xValue = 5; // or any positive value

while (xValue > 0) {
  console.log(xValue);
  xValue -= 0.5;
} // 5 4.5 4 3.5 3 2.5 2 1.5 1 0.5

/*You can use a while loop to repeatedly print the value of xValue and decrease it by 0.5 until xValue becomes negative or zero. 
Here's an example code snippet that does that:
This code initializes the xValue variable to 5 (you can use any positive value you want), 
then enters a while loop that checks if xValue is still positive. If it is, it prints the value of xValue using the console.log() function, 
and then decreases xValue by 0.5 using the -= operator. The loop continues until xValue becomes negative or zero, at which point the loop exits.

Note that the console.log() function is used here to print the value of xValue to the console. 
You can replace it with any other code that you want to execute each time through the loop.





//- Print all the odd numbers between 1 - 100.
let num = 1;
while (num <= 100) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
} // 1 3 5 7 9 ... 99

/*This code initializes a variable num to 1 and then checks if num is less than or equal to 100. 
If it is, it checks if num is an odd number by checking if num % 2 is not equal to 0. If num is odd, 
it prints it to the console using console.log(). Finally, it increments num by 1 to move on to the next number in the sequence. 
The loop will continue until num reaches 100.*/

//ถ้าหาเลขคู่
let num = 1;
while (num <= 100) {
  if (num % 2 == 0) {
    console.log(num);
  }
  num++;
} // 2 4 6 8 10 ... 100



//- Write a method with a while loop to print 1 through n in square brackets. For example, if n = 6 print [1] [2] [3] [4] [5] [6]

function bracKets(n) {
    let i = 1;
    while (i <= n) {
      console.log(`[${i}]`);
      i++;
    }
  }
  bracKets(1)

/*- Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190*/ 

  function calculateSum(n) {
    let i = 1;
    let sum = 0;
    while (i <= n) {
      sum += i;
      i++;
    }
    return sum;
  }
  
  console.log(calculateSum(5)); // 15