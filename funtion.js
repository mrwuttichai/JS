const width = 10;
const height = 6;
const area =  width * height;
console.log(area); // Output: 60


// Area of the first rectangle
const width1 = 10;
const height1 = 6;
const area1 =  width1 * height1;
console.log(area1); // Output: 60
 
// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 =  width2 * height2;
console.log(area2); // Output:36
 
// Area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 =  width3 * height3;
console.log(area3); // Output: 100

//1 Function Declarations ประกาศฟังชั่นให้ตัวแปร
function getReminder() {
    console.log('Water the plants.');
  }
  getReminder(); //ต้องเรียกฟังชันเสมอมันถึงจะlog
  
  function greetInSpanish() {
    console.log('Buenas tardes.');
  }
  greetInSpanish();

  //2 Calling a Function
  function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.')
  };
  sayThanks();//ต้องเรียกฟังชันเสมอมันถึงจะlog
  sayThanks();
  sayThanks();

  //3 Parameters and Arguments
  function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
  }
  sayThanks('Cole');

  //4 Default Parameters
  function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  //makeShoppingList();
  makeShoppingList('candies', 'water', 'wine');

  //5 Return
  function monitorCount(rows, columns){
    return rows * columns;
    }
    const numOfMonitors = monitorCount(5, 4);
    console.log(numOfMonitors)

    //6 Helper Functions
    function monitorCount(rows, columns) {
        return rows * columns;
      };
      function costOfMonitors(rows, columns) { //5,4
        return monitorCount(rows, columns) * 200; //20*200
      }
      const totalCost = costOfMonitors(5, 4);
      console.log(totalCost)

      //7 Function Expressions
      const plantNeedsWater = function(day) {
        if(day === 'Wednesday') {
          return true;
        } else {
          return false;
        }
      };
      plantNeedsWater('Tuesday');
      console.log(plantNeedsWater('Tuesday'))

      //8 Arrow Functions
      const plantNeedsWater = (day) => {
  
      } 

    //9 Concise Body Arrow Functions

      /*const plantNeedsWater = (day) => {
        return day === 'Wednesday' ? true : false;
        };*/

       const plantNeedsWater = day => day === 'Wednesday' ? true : false;
    
    //อ.ลักษณ์

    function calWithReturn (num1,num2){
        return num1 + num2; //allow to install somewhere
      }
      const total = calWithReturn(5,9);
      console.log(total);
    
      //then total can use later
      function calUseReturn(total){
          console.log (total*5);
      }
      calUseReturn(total);
    
      function cal(a){
          console.log (a+1);
      }
      cal(total);

      /*Exercise #1
      Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee 
      and a 0.1% (0.01) interest fee. Can you help her calculate her costs?

      Return the value of what she should be paying.*/

      function paYing(transaction) {
        const fee = 3;
        const interestfee = 0.01;
        return (transaction + fee) + (transaction * interestfee);
      };
      const payMent = paYing(200)
      console.log(payMent) // output: 205

      /*Exercise #2
      Part 1
      Ed would like a way to input 3 names of his friends.
      The output should be a console greeting to his friends saying: 
      `Welcome {name1}, {name2}, {name3}.`*/

      function sayWelcome(name1, name2, name3){
        console.log(`Welcome ${name1} ${name2} ${name3}.`);
      }
      
      sayWelcome('Tay', 'Tae', 'Tiew') //output: 'Welcome Tay Tae Tiew.'

      /*Part 2
       Ed would like to create a function that takes in a birth year and returns the age.

       i.e. 1990 returns 30*/

       function yourAge(currentyear,birthyear){
        return  currentyear - birthyear;
      }
      let age = yourAge(2023, 1994)
        console.log('returns ' + age) // output: 'returns 29'

       /*Part 3
       Ed would like to create a function that prints out,
       `Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.`

       function nameAge(name1, name2, name3 , age1, age2, age3){
        return ;
      }
const text = nameAge('A', 'B', 'C', 20, 40, 80 )
        console.log(`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`) 